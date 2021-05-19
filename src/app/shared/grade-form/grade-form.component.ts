import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Grade } from '../../../models/grade';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss'],
})
export class GradeFormComponent {
  @Output() formSubmit = new EventEmitter<Partial<Grade>>();

  @Input() set initialValue(value: Grade) {
    if (!value) return;
    this.formGroup.setControl('grade', new FormControl(value.grade, [Validators.required]));
    this.formGroup.setControl('description', new FormControl(value.description, [Validators.required]));
  }

  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      grade: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onFormSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    }
  }
}
