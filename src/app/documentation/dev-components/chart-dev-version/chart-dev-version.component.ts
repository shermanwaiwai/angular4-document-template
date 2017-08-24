import { Population, Service } from './data.service';

import { slideInDownAnimation } from '../../../../app.animations';
import { Component, OnInit, HostBinding } from '@angular/core';
const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
@Component({
	selector: 'chart-dev-version',
	templateUrl: 'chart-dev-version.component.html',
	animations: [slideInDownAnimation],
	providers: [Service],
})

export class ChartDevVersionComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation: boolean = true;
	@HostBinding('class.td-route-animation') classAnimation: boolean = true;
	populationData: Population[];
	constructor(private service: Service) {
		this.populationData = service.getPopulationData();
	}
	ngOnInit() {

	}
}

