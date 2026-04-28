import { TaskPriority, TaskStatus } from './task.model';

export type TableColumnType = 'text' | 'date' | 'priority' | 'status';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  type?: TableColumnType;
}

export type TableCellValue = string | TaskPriority | TaskStatus | undefined;
