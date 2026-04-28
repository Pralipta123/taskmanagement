export type TaskPriority = 'High' | 'Medium' | 'Low';

export type TaskStatus = 'Pending' | 'In Progress' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description: string;
  assigneeId: string;
  priority: TaskPriority;
  status: TaskStatus;
  startDate: string;
  dueDate: string;
  createdAt: string;
}

export interface TaskActivity {
  id: string;
  taskId: string;
  action: string;
  actorName: string;
  at: string;
}
