import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

export interface ConfirmDialogState {
  open: boolean;
  message: string;
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly state = new Subject<ConfirmDialogState>();
  private resolver: ((value: boolean) => void) | null = null;

  /** Stream for the dialog shell component to subscribe to. */
  readonly state$ = this.state.asObservable();

  confirm(message: string, title = 'Please confirm'): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.resolver = (ok: boolean) => {
        subscriber.next(ok);
        subscriber.complete();
        this.resolver = null;
      };
      this.state.next({ open: true, message, title });
    }).pipe(take(1));
  }

  /** Called by the dialog UI when the user chooses an action. */
  resolve(value: boolean): void {
    this.state.next({ open: false, message: '' });
    this.resolver?.(value);
  }
}
