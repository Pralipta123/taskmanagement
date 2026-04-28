import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Ensures dueDate is on or after startDate when both are set. */
export function dueAfterStartValidator(
  startKey: string,
  dueKey: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const start = group.get(startKey)?.value;
    const due = group.get(dueKey)?.value;
    if (!start || !due) {
      return null;
    }
    const s = new Date(start).getTime();
    const d = new Date(due).getTime();
    if (Number.isNaN(s) || Number.isNaN(d)) {
      return null;
    }
    return d < s ? { dateOrder: true } : null;
  };
}
