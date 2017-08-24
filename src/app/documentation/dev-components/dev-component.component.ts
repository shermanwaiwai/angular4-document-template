import { fadeAnimation } from '../../../app.animations';
import { Component, OnInit, HostBinding, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { TdMediaService } from '@covalent/core';

@Component({
	selector: 'app-devextreme',
	templateUrl: 'dev-component.component.html',
	animations: [fadeAnimation],
})
export class DevextremeComponent implements OnInit, AfterViewInit {

	@HostBinding('@routeAnimation') routeAnimation: boolean = true;
	@HostBinding('class.td-route-animation') classAnimation: boolean = true;

	items: Object[] = [{
		description: 'Devextreme component',
		icon: 'picture_in_picture',
		route: '/dev-components/overview',
		title: 'Devextreme Overview',
	}, {
		description: 'dev data grid',
		icon: 'view_list',
		route: '/dev-components/dev-datagrid',
		title: 'Devextreme Data Grid',
	}, {
		description: 'devextreme tree',
		icon: 'list',
		route: '/dev-components/dev-tree',
		title: 'Devextreme Tree List',
	}, {
		description: 'charts',
		icon: 'view_list',
		route: '/dev-components/dev-chart',
		title: 'Devextreme Charts',
	}];

	constructor(private _changeDetectorRef: ChangeDetectorRef,
		public media: TdMediaService) { }

	ngAfterViewInit(): void {
		// broadcast to all listener observables when loading the page
		this.media.broadcast();
		this._changeDetectorRef.detectChanges();
	}

	public ngOnInit(): void {

	}
}


