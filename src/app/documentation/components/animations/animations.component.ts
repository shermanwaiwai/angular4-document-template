import { TdRotateAnimation } from './rotate.animation';
import { slideInDownAnimation } from '../../../../app.animations';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'animations-demo',
  styleUrls: ['./animations.component.scss'],
  templateUrl: './animations.component.html',
  animations: [
    slideInDownAnimation,
    TdRotateAnimation('tdRotate'),
    TdRotateAnimation('tdRotate180', 500, 180),
    TdRotateAnimation('tdRotateNeg180', 500, -180),
  ],
})
export class AnimationsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  rotateState1: boolean = false;
  rotateState2: boolean = false;

}
