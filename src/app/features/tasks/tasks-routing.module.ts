import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskExistsGuard } from '../../core/guards/task-exists.guard';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'new', component: TaskFormComponent },
  {
    path: ':id/edit',
    component: TaskFormComponent,
    canActivate: [TaskExistsGuard],
  },
  {
    path: ':id',
    component: TaskDetailComponent,
    canActivate: [TaskExistsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
