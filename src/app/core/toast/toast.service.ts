import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ToastData } from '../../../models/toast-data';

@Injectable()
export class ToastService {
  constructor(private toastr: ToastrService) {}

  public openSuccessToast(toastData: ToastData): void {
    this.toastr.success(toastData.message, toastData.title);
  }

  public openErrorToast(toastData: ToastData): void {
    this.toastr.error(toastData.message, toastData.title);
  }
}
