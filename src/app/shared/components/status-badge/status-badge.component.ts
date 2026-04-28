import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type StatusBadgeKind = 'priority' | 'task-status';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  @Input() kind: StatusBadgeKind = 'priority';
  @Input() value = '';

  cssClass(): string {
    const v = (this.value || '').toLowerCase().replace(/\s+/g, '-');
    return `${this.kind}-${v}`;
  }
}
