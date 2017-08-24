// import { DocumentationComponent } from './documentation/documentation.component';
import { ThemeComponent } from './theme/theme.component';
import { NavigationComponent } from './theme/navigation/navigation.component';
import { FeaturesFormComponent } from './dashboard-subSystem/features/form/form.component';
import { SubSystemFeaturesComponent } from './dashboard-subSystem/features/features.component';

import { SubSystemStatsComponent } from './dashboard-subSystem/stats/stats.component';
import { SubSystemOverviewComponent } from './dashboard-subSystem/overview/overview.component';

import { DashboardSubSystemComponent } from './dashboard-subSystem/dashboard-subsystem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        // preload: true loads the module immediately
        path: 'docs', data: { preload: true, }, loadChildren: './documentation/docs/docs.module#DocsModule',
    },
    {
        // preload: true loads the module immediately
        path: 'components', data: { preload: true, }, loadChildren: './documentation/components/components.module#ComponentsModule',
    },
    {
        path: '',
        component: NavigationComponent,
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
    // {
    //     path: 'doc',
    //     component: ThemeComponent,
    //     children: [
    //         {
    //             component: DocumentationComponent,
    //             path: 'main',
    //         },
    //     ],
    // },
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
    NavigationComponent,
    LoginComponent,
    ThemeComponent,
    DashboardComponent,
    DashboardSubSystemComponent,
    FormComponent,
    LogsComponent,
    DetailComponent,
    FeaturesFormComponent,
    SubSystemFeaturesComponent,
    SubSystemOverviewComponent,
    SubSystemStatsComponent,
    // DocumentationComponent,
];
