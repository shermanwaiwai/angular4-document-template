import { slideInDownAnimation } from '../../../../app.animations';

import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'components-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInDownAnimation],
})
export class ComponentsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    color: 'deep-purple-A700',
    icon: 'view_list',
    route: '/dev-components/dev-datagrid',
    title: 'Data Grid',
  }, {
    color: 'blue-A700',
    icon: 'list',
    route: '/dev-components/dev-tree',
    title: 'Tree List',
  }, {
    color: 'pink-A700',
    icon: 'insert_chart',
    route: '/dev-components/dev-chart',
    title: 'Charts',
  }];
}
