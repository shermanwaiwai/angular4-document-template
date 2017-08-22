import { FeaturesFormComponent } from './dashboard-subSystem/features/form/form.component';
import { SubSystemFeaturesComponent } from './dashboard-subSystem/features/features.component';

import { SubSystemStatsComponent } from './dashboard-subSystem/stats/stats.component';
import { SubSystemOverviewComponent } from './dashboard-subSystem/overview/overview.component';

import { DashboardSubSystemComponent } from './dashboard-subSystem/dashboard-subsystem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                component: DashboardComponent,
                path: 'dashboard',
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
            { path: '', loadChildren: './users/users.module#UsersModule' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }

export const routedComponents: any[] = [
    MainComponent, LoginComponent,
    DashboardComponent, DashboardSubSystemComponent,
    FormComponent, LogsComponent, DetailComponent,
    FeaturesFormComponent, SubSystemFeaturesComponent, SubSystemOverviewComponent, SubSystemStatsComponent,
];
