import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Task, TaskActivity } from '../../../core/models/task.model';
import { User } from '../../../core/models/user.model';
import { TaskService } from '../../../core/services/task.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';

export interface TaskDetailVm {
  task: Task;
  assignee: User | undefined;
  activities: TaskActivity[];
}

type TaskDetailState =
  | { state: 'error'; message: string }
  | { state: 'ready'; data: TaskDetailVm }
  | { state: 'missing' };

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailComponent {
  readonly vm$: Observable<TaskDetailState> = this.route.paramMap.pipe(
    map((pm) => pm.get('id')),
    switchMap((id) => {
      if (!id) {
        return of({ state: 'missing' } as const);
      }
      return combineLatest([this.tasks.getTask(id), this.tasks.getActivities(id)]).pipe(
        map(([task, activities]) => {
          if (!task) {
            return { state: 'missing' } as const;
          }
          const assignee = this.tasks.getUserById(task.assigneeId);
          const data: TaskDetailVm = { task, assignee, activities };
          return { state: 'ready' as const, data };
        }),
        catchError(() =>
          of({
            state: 'error' as const,
            message: 'We could not load this task. Try again from the list.',
          })
        )
      );
    })
  );

  deleting = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tasks: TaskService,
    private readonly confirm: ConfirmDialogService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  edit(id: string): void {
    void this.router.navigate(['/tasks', id, 'edit']);
  }

  /** Template helpers so strict template typing can narrow view state. */
  errorMessage(vm: TaskDetailState): string | null {
    return vm.state === 'error' ? vm.message : null;
  }

  readyView(vm: TaskDetailState): TaskDetailVm | null {
    return vm.state === 'ready' ? vm.data : null;
  }

  isMissing(vm: TaskDetailState): boolean {
    return vm.state === 'missing';
  }

  askDelete(task: Task): void {
    this.confirm
      .confirm(`Delete “${task.title}”? This cannot be undone.`, 'Delete task')
      .subscribe((ok) => {
        if (!ok) {
          return;
        }
        this.deleting = true;
        this.cdr.markForCheck();
        this.tasks.deleteTask(task.id).subscribe({
          next: () => void this.router.navigate(['/tasks']),
          error: () => {
            this.deleting = false;
            this.cdr.markForCheck();
          },
          complete: () => {
            this.deleting = false;
            this.cdr.markForCheck();
          },
        });
      });
  }
}
