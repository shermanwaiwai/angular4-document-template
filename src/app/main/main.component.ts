import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  }, {
    title: 'SubSystem Dashboard',
    route: '/subsystem',
    icon: 'view_quilt',
  },
    // {
    //   title: 'Product Logs',
    //   route: '/logs',
    //   icon: 'receipt',
    // },
    // {
    //   title: 'Manage Users',
    //   route: '/users',
    //   icon: 'people',
    // },
  ];

  constructor(private _router: Router) { }

  logout(): void {
    this._router.navigate(['/login']);
  }
}
