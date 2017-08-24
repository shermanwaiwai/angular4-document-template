import { slideInDownAnimation } from '../../../../app.animations';
import { Component, OnInit, HostBinding } from '@angular/core';
const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
	selector: 'datagrid',
	templateUrl: './datagrid.component.html',
	styleUrls: ['./datagrid.component.scss'],
	animations: [slideInDownAnimation],
})

export class DatagridComponent implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation: boolean = true;
	@HostBinding('class.td-route-animation') classAnimation: boolean = true;
	ngOnInit() {

	}
}

