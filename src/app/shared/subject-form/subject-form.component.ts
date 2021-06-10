import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../models/subject';
import { SubjectDto } from '../../../models/subject.dto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss'],
})
export class SubjectFormComponent {
  @Output() formSubmit = new EventEmitter<SubjectDto>();

  public editMode: boolean = false;
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Subject) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      students: ['', [Validators.required]],
    });

    if (!data) return;
    this.editMode = true;
    this.formGroup.setControl('name', new FormControl(data.name, [Validators.required]));
    this.formGroup.setControl('description', new FormControl(data.description, [Validators.required]));
    this.formGroup.setControl('students', new FormControl(data.students, [Validators.required]));
  }

  onFormSubmit() {
    if (this.formGroup.valid) {
      this.formSubmit.emit(this.formGroup.value);
    }
  }
}
