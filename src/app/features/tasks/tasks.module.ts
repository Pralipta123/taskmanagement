import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent, TaskDetailComponent],
  imports: [SharedModule, TasksRoutingModule],
})
export class TasksModule {}
