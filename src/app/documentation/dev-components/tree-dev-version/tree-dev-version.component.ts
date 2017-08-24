import { Product, Service } from './data.service';
import { slideInDownAnimation } from '../../../../app.animations';
import { Component, OnInit, HostBinding } from '@angular/core';
const NUMBER_FORMAT: (v: any) => any = (v: number) => v;
const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);
@Component({
	selector: 'tree-dev-version',
	templateUrl: 'tree-dev-version.component.html',
	animations: [slideInDownAnimation],
	providers: [Service],
})

export class TreeDevVersionComponent implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation: boolean = true;
	@HostBinding('class.td-route-animation') classAnimation: boolean = true;
	products: Product[];
	currentItem: Product;
	constructor(private service: Service) {
		this.products = service.getProducts();
		this.currentItem = this.products[0];
	}

	ngOnInit() {

	}
	selectItem(e) {
		this.currentItem = e.itemData;
	}
}

