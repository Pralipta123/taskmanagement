import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

@NgModule({
  declarations: [
    DataTableComponent,
    ConfirmDialogComponent,
    StatusBadgeComponent,
    FormFieldComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    DataTableComponent,
    ConfirmDialogComponent,
    StatusBadgeComponent,
    FormFieldComponent,
  ],
})
export class SharedModule {}
