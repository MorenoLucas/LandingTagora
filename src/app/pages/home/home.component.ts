import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showModal = false;
  constructor() {}

  ngOnInit(): void {}
  registrar(): void {
    this.showModal = !this.showModal;
  }
}
