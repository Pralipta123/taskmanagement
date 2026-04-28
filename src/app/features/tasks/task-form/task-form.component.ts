import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { catchError, finalize, switchMap, takeUntil } from 'rxjs/operators';
import { TaskPriority, TaskStatus } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { dueAfterStartValidator } from '../../../core/validators/date-range.validator';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  readonly priorities: TaskPriority[] = ['High', 'Medium', 'Low'];
  readonly statuses: TaskStatus[] = ['Pending', 'In Progress', 'Completed'];

  readonly form = this.fb.group(
    {
      title: this.fb.nonNullable.control('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      }),
      description: this.fb.nonNullable.control('', {
        validators: [Validators.maxLength(2000)],
      }),
      assigneeId: this.fb.nonNullable.control('', { validators: [Validators.required] }),
      priority: this.fb.nonNullable.control<TaskPriority>('Medium', {
        validators: [Validators.required],
      }),
      status: this.fb.nonNullable.control<TaskStatus>('Pending', {
        validators: [Validators.required],
      }),
      startDate: this.fb.nonNullable.control('', { validators: [Validators.required] }),
      dueDate: this.fb.nonNullable.control('', { validators: [Validators.required] }),
    },
    { validators: dueAfterStartValidator('startDate', 'dueDate') }
  );

  taskId: string | null = null;
  pageTitle = 'New task';
  loadError: string | null = null;
  saveError: string | null = null;
  saving = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly tasks: TaskService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((pm) => {
          const id = pm.get('id');
          this.taskId = id;
          this.loadError = null;
          if (!id) {
            this.pageTitle = 'New task';
            this.form.reset({
              title: '',
              description: '',
              assigneeId: '',
              priority: 'Medium' as TaskPriority,
              status: 'Pending' as TaskStatus,
              startDate: '',
              dueDate: '',
            });
            return of(undefined);
          }
          this.pageTitle = 'Edit task';
          return this.tasks.getTask(id);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((task) => {
        if (this.taskId && !task) {
          this.loadError = 'Could not load this task.';
        }
        if (task) {
          this.form.patchValue({
            title: task.title,
            description: task.description,
            assigneeId: task.assigneeId,
            priority: task.priority,
            status: task.status,
            startDate: task.startDate,
            dueDate: task.dueDate,
          });
        }
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  assignees() {
    return this.tasks.getUsers();
  }

  submit(): void {
    this.saveError = null;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      this.cdr.markForCheck();
      return;
    }
    if (this.loadError) {
      return;
    }

    const v = this.form.getRawValue();
    this.saving = true;
    this.tasks
      .saveTask({
        id: this.taskId ?? undefined,
        title: v.title.trim(),
        description: v.description.trim(),
        assigneeId: v.assigneeId,
        priority: v.priority,
        status: v.status,
        startDate: v.startDate,
        dueDate: v.dueDate,
      })
      .pipe(
        finalize(() => {
          this.saving = false;
          this.cdr.markForCheck();
        }),
        catchError((err: Error) => {
          this.saveError = err.message ?? 'Something went wrong while saving.';
          return of(null);
        })
      )
      .subscribe((saved) => {
        if (saved) {
          void this.router.navigate(['/tasks', saved.id]);
        }
      });
  }

  cancel(): void {
    void this.router.navigate(['/tasks']);
  }
}
