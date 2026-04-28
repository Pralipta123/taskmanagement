import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmDialogService, ConfirmDialogState } from '../../services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent implements OnDestroy {
  state: ConfirmDialogState = { open: false, message: '' };
  private sub: Subscription;

  constructor(
    private readonly dialog: ConfirmDialogService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.sub = this.dialog.state$.subscribe((s) => {
      this.state = s;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  confirm(): void {
    this.dialog.resolve(true);
  }

  cancel(): void {
    this.dialog.resolve(false);
  }
}
