import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TaskService } from '../services/task.service';

@Injectable({ providedIn: 'root' })
export class TaskExistsGuard {
  constructor(
    private readonly tasks: TaskService,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const id = route.paramMap.get('id');
    if (!id) {
      return of(this.router.createUrlTree(['/tasks']));
    }
    return this.tasks.getTask(id).pipe(
      take(1),
      map((task) =>
        task ? true : this.router.createUrlTree(['/tasks'], { queryParams: { missing: id } })
      )
    );
  }
}
