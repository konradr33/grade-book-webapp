import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { SubjectDto } from '../../../models/subject.dto';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
})
export class SubjectFormComponent {
  @Output() formSubmit = new EventEmitter<SubjectDto>();

  @Input() set initialValue(value: Subject) {
    if (!value) return;
    this.formGroup.setControl('name', new FormControl(value.name, [Validators.required]));
    this.formGroup.setControl('description', new FormControl(value.description, [Validators.required]));
    this.formGroup.setControl('students', new FormControl(value.students, [Validators.required]));
  }

  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      students: ['', [Validators.required]],
    });
  }

  onFormSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    }
  }
}
