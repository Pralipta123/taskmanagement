import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() hint = '';
  @Input() control: AbstractControl | null = null;

  showErrors(): boolean {
    const c = this.control;
    return !!(c && c.invalid && (c.dirty || c.touched));
  }

  errorMessages(): string[] {
    const c = this.control;
    if (!c || !c.errors) {
      return [];
    }
    const e = c.errors;
    const out: string[] = [];
    if (e['required']) {
      out.push('This field is required.');
    }
    if (e['minlength']) {
      out.push(`At least ${e['minlength'].requiredLength} characters.`);
    }
    if (e['maxlength']) {
      out.push(`At most ${e['maxlength'].requiredLength} characters.`);
    }
    return out;
  }
}
