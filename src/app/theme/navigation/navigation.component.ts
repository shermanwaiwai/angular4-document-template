import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  routes: Object[] = [{
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  }, {
    title: 'SubSystem Dashboard',
    route: '/subsystem/dashboard',
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
