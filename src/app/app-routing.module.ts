// import { DocumentationComponent } from './documentation/documentation.component';
import { ThemeComponent } from './theme/theme.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'docs', data: { preload: true, }, loadChildren: './documentation/docs/docs.module#DocsModule',
    },
    {
        path: 'components', data: { preload: true, }, loadChildren: './documentation/components/components.module#ComponentsModule',
    },
    {
        path: 'style', data: { preload: false, }, loadChildren: './documentation/style-guide/style-guide.module#StyleGuideModule',
    },
    {
        path: 'dev-components', data: { preload: true, }, loadChildren: './documentation/dev-components/dev-component.module#DevComponentModule',
    },
    {
        path: '', data: { preload: true, }, loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
];

export const routedComponents: any[] = [
    LoginComponent,
    ThemeComponent,
    // DashboardComponent,
    // DashboardSubSystemComponent,
    // FormComponent,
    // LogsComponent,
    // DetailComponent,
    // FeaturesFormComponent,
    // SubSystemFeaturesComponent,
    // SubSystemOverviewComponent,
    // SubSystemStatsComponent,
    // DocumentationComponent,
];
