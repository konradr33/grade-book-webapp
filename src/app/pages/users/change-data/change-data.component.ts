import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from '../../../core/identity/identity.service';
import { ToastService } from '../../../core/toast/toast.service';
import { UserDataDto } from '../../../../models/user-data.dto';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.scss'],
})
export class ChangeDataComponent {
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder, private identityService: IdentityService, private toastService: ToastService) {
    this.formGroup = this.fb.group({
      role: ['', [Validators.required]],
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      surname: ['', [Validators.required]],
    });
  }

  onFormSubmit() {
    if (this.formGroup.valid) {
      this.identityService
        .setUserData(this.formGroup.value['username'], {
          role: this.formGroup.value.role,
          firstName: this.formGroup.value.firstname,
          lastName: this.formGroup.value.surname,
        })
        .subscribe(
          () => {
            this.toastService.openSuccessToast({ title: 'Success', message: 'Data updated' });
          },
          () => {
            this.toastService.openErrorToast({ title: 'Error', message: 'Could not update data, try again later.' });
          },
        );
    }
  }
}
