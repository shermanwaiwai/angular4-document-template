import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { FeaturesFormComponent } from './dashboard-subSystem/features/form/form.component';
import { SubSystemFeaturesComponent } from './dashboard-subSystem/features/features.component';
import { SubSystemStatsComponent } from './dashboard-subSystem/stats/stats.component';
import { SubSystemOverviewComponent } from './dashboard-subSystem/overview/overview.component';
import { DashboardSubSystemComponent } from './dashboard-subSystem/dashboard-subsystem.component';
import { NavigationComponent } from '../theme/navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    component: NavigationComponent,
    path: '',
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'subsystem',
            component: DashboardSubSystemComponent,
            children: [
                {
                    path: 'dashboard',
                    component: SubSystemOverviewComponent,
                },
                {
                    path: 'stats',
                    component: SubSystemStatsComponent,
                },
                {
                    path: 'features',
                    children: [
                        {
                            path: '',
                            component: SubSystemFeaturesComponent,
                        },
                        {
                            path: 'add',
                            component: FeaturesFormComponent,
                        },
                        {
                            path: ':id/delete',
                            component: FeaturesFormComponent,
                        },
                        {
                            path: ':id/edit',
                            component: FeaturesFormComponent,
                        },
                    ],
                },
            ],
        },
        {
            path: 'item/:id',
            component: DetailComponent,
        },
        {
            path: 'logs',
            component: LogsComponent,
        },
        {
            path: 'form',
            component: FormComponent,
        },
    ],
}];

export const dashboardRoutes: any = RouterModule.forChild(routes);
