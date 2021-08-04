import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent
  extends SimpleModalComponent<ConfirmModel, boolean>
  implements ConfirmModel
{
  title: string;
  message: string;
  constructor() {
    super();
  }

  ngOnInit(): void {}
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
