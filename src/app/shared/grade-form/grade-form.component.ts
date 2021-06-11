import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Grade } from '../../../models/grade';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss'],
})
export class GradeFormComponent {
  @Output() formSubmit = new EventEmitter<{ grade: string; description: string }>();
  public formGroup: FormGroup;
  public editMode: boolean = false;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Grade) {
    this.formGroup = this.fb.group({
      grade: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    if (!data) return;
    this.editMode = true;
    this.formGroup.setControl('grade', new FormControl(data.grade, [Validators.required]));
    this.formGroup.setControl('description', new FormControl(data.description, [Validators.required]));
  }
}
