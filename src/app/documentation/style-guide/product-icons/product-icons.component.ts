import { slideInDownAnimation } from '../../../../app.animations';
import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'style-guide-product-icons',
  styleUrls: ['./product-icons.component.scss'],
  templateUrl: './product-icons.component.html',
  animations: [slideInDownAnimation],
})
export class ProductIconsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
