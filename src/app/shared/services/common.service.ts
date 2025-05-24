import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastr: ToastrService,
  ) {

   }


  notification(notificationType: string, message: string, title?: string) {
    this.toastr.clear();
    let titleMessage = '';
    (this.toastr as any)[notificationType](message, titleMessage, {
      positionClass: "toast-bottom-right",
      timeOut: 8000, // 8 seconds to auto close
      maxOpened: 1,
      closeButton: true,
      progressBar: true
    });
  }
}
