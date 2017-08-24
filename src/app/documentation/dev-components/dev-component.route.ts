import { ChartDevVersionComponent } from './chart-dev-version/chart-dev-version.component';
import { TreeDevVersionComponent } from './tree-dev-version/tree-dev-version.component';
import { DatagridDevVersionComponent } from './datagrid-dev-version/datagrid-dev-version.component';
import { ComponentsOverviewComponent } from './overview/overview.component';
import { DevextremeComponent } from './dev-component.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    children: [
        {
            component: ComponentsOverviewComponent,
            path: 'overview',
        }, {
            component: DatagridDevVersionComponent,
            path: 'dev-datagrid',
        },
        {
            component: TreeDevVersionComponent,
            path: 'dev-tree',
        },
        {
            component: ChartDevVersionComponent,
            path: 'dev-chart',
        },
    ],
    component: DevextremeComponent,
    path: 'dev-components',
}];

export const componentsRoutes: any = RouterModule.forChild(routes);


