import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItemList();
  }

  menuItemList() {
    this.items = [
      {
        label: 'Anasayfa',
        icon: 'pi pi-home',
        routerLink:''

      },
      {
        label: 'Tüm Kategoriler',
        icon: 'pi pi-sort-down',

      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',

      },
      {
        label: 'Kaydol',
        icon: 'pi pi-user-plus',
        routerLink:"register"
      },
      {
        label: 'Giriş Yap',
        icon: 'pi pi-sign-in',

      },
    ];
  }
}


