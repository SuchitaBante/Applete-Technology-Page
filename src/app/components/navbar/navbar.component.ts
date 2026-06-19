import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
   
  }


  isMenuOpen = false;
  showServices = false;

  toggleServices() {
    this.showServices = !this.showServices;
  }
}