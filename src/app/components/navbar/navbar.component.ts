import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
showServices = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleServices() {
    this.showServices = !this.showServices;
  }
}