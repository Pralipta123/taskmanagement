import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableColumn, TableColumnType } from '../../../core/models/table-column.model';

export type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() rows: Record<string, unknown>[] = [];
  @Input() sortColumn: string | null = null;
  @Input() sortDirection: SortDirection = 'asc';
  @Input() page = 1;
  @Input() pageSize = 5;
  @Input() totalItems = 0;
  @Input() loading = false;
  @Input() emptyMessage = 'No rows to display.';

  @Output() sortChange = new EventEmitter<{ column: string; direction: SortDirection }>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() rowActivate = new EventEmitter<Record<string, unknown>>();

  columnType(col: TableColumn): TableColumnType {
    return col.type ?? 'text';
  }

  sortIcon(colKey: string): string {
    if (this.sortColumn !== colKey) {
      return '↕';
    }
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  onSort(col: TableColumn): void {
    if (!col.sortable) {
      return;
    }
    const nextDir: SortDirection =
      this.sortColumn === col.key && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortChange.emit({ column: col.key, direction: nextDir });
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.totalItems / this.pageSize));
  }

  pages(): number[] {
    const t = this.totalPages();
    const maxButtons = 5;
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, this.page - half);
    const end = Math.min(t, start + maxButtons - 1);
    start = Math.max(1, end - maxButtons + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goPage(p: number): void {
    const t = this.totalPages();
    const clamped = Math.min(Math.max(1, p), t);
    if (clamped !== this.page) {
      this.pageChange.emit(clamped);
    }
  }

  cellValue(row: Record<string, unknown>, key: string): unknown {
    return row[key];
  }

  asString(value: unknown): string {
    return value == null ? '' : String(value);
  }

  /** Coerces cell values for the `DatePipe` under strict template checking. */
  asDatePipeInput(value: unknown): string | number | Date | null {
    if (value == null || value === '') {
      return null;
    }
    if (value instanceof Date) {
      return value;
    }
    if (typeof value === 'number' || typeof value === 'string') {
      return value;
    }
    return String(value);
  }

  trackRow(_index: number, row: Record<string, unknown>): string {
    return String(row['id'] ?? _index);
  }
}
