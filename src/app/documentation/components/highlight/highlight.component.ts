import { slideInDownAnimation } from '../../../../app.animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'highlight-demo',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  animations: [slideInDownAnimation],
})
export class HighlightDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
