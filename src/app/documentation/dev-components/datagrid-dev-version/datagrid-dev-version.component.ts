
import { Customer, Service } from './data.service';
import { slideInDownAnimation } from '../../../../app.animations';
import { Component, OnInit, HostBinding } from '@angular/core';
const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
@Component({
	selector: 'datagrid-dev-version',
	templateUrl: 'datagrid-dev-version.component.html',
	styleUrls: ['datagrid-dev-version.scss'],
	animations: [slideInDownAnimation],
	providers: [Service],
})

export class DatagridDevVersionComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation: boolean = true;
	@HostBinding('class.td-route-animation') classAnimation: boolean = true;
	customers: Customer[];
	constructor(private service: Service) {
		this.customers = service.getCustomers();
	}
	ngOnInit() {

	}
}

