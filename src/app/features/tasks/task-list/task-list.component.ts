import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, takeUntil } from 'rxjs/operators';
import { Task } from '../../../core/models/task.model';
import { TableColumn } from '../../../core/models/table-column.model';
import { TaskService } from '../../../core/services/task.service';
import { SortDirection } from '../../../shared/components/data-table/data-table.component';

interface TaskRow extends Record<string, unknown> {
  id: string;
  title: string;
  assigneeName: string;
  priority: string;
  status: string;
  dueDate: string;
  createdAt: string;
}

export interface TaskListStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private filtered: Task[] = [];

  readonly columns: TableColumn[] = [
    { key: 'title', label: 'Task Title', sortable: true, type: 'text' },
    { key: 'assigneeName', label: 'Assigned To', sortable: true, type: 'text' },
    { key: 'priority', label: 'Priority', sortable: true, type: 'priority' },
    { key: 'status', label: 'Status', sortable: true, type: 'status' },
    { key: 'dueDate', label: 'Due Date', sortable: true, type: 'date' },
    { key: 'createdAt', label: 'Created Date', sortable: true, type: 'date' },
  ];

  readonly filterForm = this.fb.nonNullable.group({
    search: '',
    assignee: '',
    status: '',
  });

  tableRows: TaskRow[] = [];
  stats: TaskListStats = { total: 0, pending: 0, inProgress: 0, completed: 0 };
  totalFiltered = 0;
  page = 1;
  readonly pageSize = 5;
  sortColumn: string | null = 'createdAt';
  sortDirection: SortDirection = 'desc';
  loading = true;

  constructor(
    private readonly tasks: TaskService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const search$ = this.filterForm.controls.search.valueChanges.pipe(
      startWith(this.filterForm.controls.search.value),
      debounceTime(280),
      distinctUntilChanged()
    );
    const assignee$ = this.filterForm.controls.assignee.valueChanges.pipe(
      startWith(this.filterForm.controls.assignee.value)
    );
    const status$ = this.filterForm.controls.status.valueChanges.pipe(
      startWith(this.filterForm.controls.status.value)
    );

    combineLatest([this.tasks.allTasks$, search$, assignee$, status$])
      .pipe(
        map(([taskList, search, assignee, status]) =>
          this.applyFilters(taskList, search, assignee, status)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((filtered) => {
        this.loading = false;
        this.filtered = filtered;
        this.page = 1;
        this.rebuildTable();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  assigneeOptions(): { id: string; name: string }[] {
    return this.tasks.getUsers().map((u) => ({ id: u.id, name: u.name }));
  }

  onSort(event: { column: string; direction: SortDirection }): void {
    this.sortColumn = event.column;
    this.sortDirection = event.direction;
    this.rebuildTable();
  }

  onPageChange(p: number): void {
    this.page = p;
    this.rebuildTable();
  }

  openRow(row: Record<string, unknown>): void {
    const id = row['id'];
    if (typeof id === 'string') {
      void this.router.navigate(['/tasks', id]);
    }
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.totalFiltered / this.pageSize));
  }

  private rebuildTable(): void {
    this.totalFiltered = this.filtered.length;
    this.stats = this.computeStats(this.filtered);
    if (this.page > this.totalPages()) {
      this.page = 1;
    }
    const sorted = this.sortTasks(this.filtered, this.sortColumn, this.sortDirection);
    const start = (this.page - 1) * this.pageSize;
    this.tableRows = sorted.slice(start, start + this.pageSize).map((t) => this.toRow(t));
    this.cdr.markForCheck();
  }

  private computeStats(tasks: Task[]): TaskListStats {
    let pending = 0;
    let inProgress = 0;
    let completed = 0;
    for (const t of tasks) {
      if (t.status === 'Pending') {
        pending += 1;
      } else if (t.status === 'In Progress') {
        inProgress += 1;
      } else if (t.status === 'Completed') {
        completed += 1;
      }
    }
    return { total: tasks.length, pending, inProgress, completed };
  }

  private applyFilters(
    taskList: Task[],
    search: string,
    assignee: string,
    status: string
  ): Task[] {
    const q = search.trim().toLowerCase();
    return taskList.filter((t) => {
      if (q && !t.title.toLowerCase().includes(q)) {
        return false;
      }
      if (assignee && t.assigneeId !== assignee) {
        return false;
      }
      if (status && t.status !== status) {
        return false;
      }
      return true;
    });
  }

  private sortTasks(
    list: Task[],
    column: string | null,
    direction: SortDirection
  ): Task[] {
    if (!column) {
      return [...list];
    }
    const dir = direction === 'asc' ? 1 : -1;
    const copy = [...list];
    copy.sort((a, b) => {
      const va = this.sortValue(a, column);
      const vb = this.sortValue(b, column);
      if (va < vb) {
        return -1 * dir;
      }
      if (va > vb) {
        return 1 * dir;
      }
      return 0;
    });
    return copy;
  }

  private sortValue(task: Task, column: string): string | number {
    if (column === 'assigneeName') {
      return this.tasks.getUserById(task.assigneeId)?.name ?? '';
    }
    const v = (task as unknown as Record<string, unknown>)[column];
    if (v == null) {
      return '';
    }
    if (column === 'dueDate' || column === 'createdAt' || column === 'startDate') {
      return new Date(String(v)).getTime();
    }
    return String(v).toLowerCase();
  }

  private toRow(task: Task): TaskRow {
    return {
      id: task.id,
      title: task.title,
      assigneeName: this.tasks.getUserById(task.assigneeId)?.name ?? '—',
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate,
      createdAt: task.createdAt,
    };
  }
}
