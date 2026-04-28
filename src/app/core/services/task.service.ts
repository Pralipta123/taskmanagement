import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError, timer } from 'rxjs';
import { delay, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { Task, TaskActivity } from '../models/task.model';
import { User } from '../models/user.model';

const STORAGE_KEY = 'taskmanagement_tasks';

function newId(): string {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `t-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Alex Rivera', email: 'alex@example.com', role: 'Engineer', department: 'Platform' },
  { id: 'u2', name: 'Jordan Lee', email: 'jordan@example.com', role: 'Designer', department: 'Product' },
  { id: 'u3', name: 'Sam Patel', email: 'sam@example.com', role: 'Team Lead', department: 'Platform' },
  { id: 'u4', name: 'Taylor Chen', email: 'taylor@example.com', role: 'Analyst', department: 'Data' },
];

const SEED_TASKS: Task[] = [
  {
    id: '1',
    title: 'API rate limiting',
    description: 'Implement token bucket limits on public endpoints.',
    assigneeId: 'u1',
    priority: 'High',
    status: 'In Progress',
    startDate: '2026-04-01',
    dueDate: '2026-05-15',
    createdAt: '2026-03-28T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Dashboard wireframes',
    description: 'Low-fidelity layouts for the analytics dashboard.',
    assigneeId: 'u2',
    priority: 'Medium',
    status: 'Pending',
    startDate: '2026-04-10',
    dueDate: '2026-04-30',
    createdAt: '2026-04-02T14:30:00.000Z',
  },
  {
    id: '3',
    title: 'Quarterly review deck',
    description: 'Slides for leadership with KPI summary.',
    assigneeId: 'u3',
    priority: 'Low',
    status: 'Completed',
    startDate: '2026-03-01',
    dueDate: '2026-03-20',
    createdAt: '2026-02-15T09:00:00.000Z',
  },
  {
    id: '4',
    title: 'Accessibility audit',
    description: 'WCAG 2.1 AA pass on checkout flow.',
    assigneeId: 'u2',
    priority: 'High',
    status: 'Pending',
    startDate: '2026-04-18',
    dueDate: '2026-05-01',
    createdAt: '2026-04-05T11:20:00.000Z',
  },
  {
    id: '5',
    title: 'Data pipeline monitoring',
    description: 'Alerts for failed Airflow DAG runs.',
    assigneeId: 'u4',
    priority: 'Medium',
    status: 'In Progress',
    startDate: '2026-04-12',
    dueDate: '2026-04-28',
    createdAt: '2026-04-06T08:45:00.000Z',
  },
  {
    id: '6',
    title: 'On-call runbook',
    description: 'Document escalation paths and rollback steps.',
    assigneeId: 'u3',
    priority: 'Low',
    status: 'Pending',
    startDate: '2026-04-20',
    dueDate: '2026-05-10',
    createdAt: '2026-04-08T16:00:00.000Z',
  },
];

const MOCK_ACTIVITIES: TaskActivity[] = [
  { id: 'a1', taskId: '1', action: 'Task created', actorName: 'Sam Patel', at: '2026-03-28T10:00:00.000Z' },
  { id: 'a2', taskId: '1', action: 'Priority set to High', actorName: 'Sam Patel', at: '2026-03-28T10:05:00.000Z' },
  { id: 'a3', taskId: '1', action: 'Status changed to In Progress', actorName: 'Alex Rivera', at: '2026-04-01T09:00:00.000Z' },
  { id: 'a4', taskId: '2', action: 'Task created', actorName: 'Jordan Lee', at: '2026-04-02T14:30:00.000Z' },
  { id: 'a5', taskId: '3', action: 'Marked Completed', actorName: 'Sam Patel', at: '2026-03-19T17:00:00.000Z' },
];

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly tasks$ = new BehaviorSubject<Task[]>(this.loadInitial());

  /** All tasks stream for list views (shareReplay avoids duplicate subscriptions). */
  readonly allTasks$: Observable<Task[]> = this.tasks$.pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  getUsers(): User[] {
    return MOCK_USERS;
  }

  getUserById(id: string): User | undefined {
    return MOCK_USERS.find((u) => u.id === id);
  }

  getActivities(taskId: string): Observable<TaskActivity[]> {
    return of(MOCK_ACTIVITIES.filter((a) => a.taskId === taskId)).pipe(delay(120));
  }

  getTask(id: string): Observable<Task | undefined> {
    return this.tasks$.pipe(
      map((tasks) => tasks.find((t) => t.id === id)),
      delay(80)
    );
  }

  /** Simulated save with occasional failure for error-handling demos. */
  saveTask(task: Omit<Task, 'id' | 'createdAt'> & { id?: string }): Observable<Task> {
    const shouldFail = Math.random() < 0.08;
    return timer(shouldFail ? 400 : 350).pipe(
      switchMap(() => {
        if (shouldFail) {
          return throwError(
            () => new Error('Network error: could not save task. Please try again.')
          );
        }
        const now = new Date().toISOString();
        const list = [...this.tasks$.value];
        if (task.id) {
          const idx = list.findIndex((t) => t.id === task.id);
          if (idx === -1) {
            return throwError(() => new Error('Task not found.'));
          }
          const updated: Task = {
            ...list[idx],
            ...task,
            id: task.id,
            createdAt: list[idx].createdAt,
          };
          list[idx] = updated;
          this.persist(list);
          return of(updated);
        }
        const created: Task = {
          ...task,
          id: newId(),
          createdAt: now,
        };
        list.push(created);
        this.persist(list);
        return of(created);
      })
    );
  }

  deleteTask(id: string): Observable<void> {
    return of(null).pipe(
      delay(200),
      tap(() => {
        const next = this.tasks$.value.filter((t) => t.id !== id);
        this.persist(next);
      }),
      map(() => undefined)
    );
  }

  private loadInitial(): Task[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Task[];
        if (Array.isArray(parsed) && parsed.length) {
          return parsed;
        }
      }
    } catch {
      /* ignore */
    }
    return [...SEED_TASKS];
  }

  private persist(tasks: Task[]): void {
    this.tasks$.next(tasks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* ignore */
    }
  }
}
