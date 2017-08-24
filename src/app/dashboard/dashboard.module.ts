import { RequestInterceptor } from '../../config/interceptors/request.interceptor';
import { CovalentHttpModule } from '@covalent/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from '../theme/navigation/navigation.component';
import { DashboardSubSystemComponent } from './dashboard-subSystem/dashboard-subsystem.component';
import { SubSystemOverviewComponent } from './dashboard-subSystem/overview/overview.component';
import { SubSystemStatsComponent } from './dashboard-subSystem/stats/stats.component';
import { SubSystemFeaturesComponent } from './dashboard-subSystem/features/features.component';
import { FeaturesFormComponent } from './dashboard-subSystem/features/form/form.component';
import { DetailComponent } from './detail/detail.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { ToolbarModule } from '../documentation/toolbar/toolbar.module';
import { DocumentationToolsModule } from '../documentation-tools';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardRoutes } from './dashboard.route';
// External Dependencies
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import {
    MdCheckboxModule,
    MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdMenuModule, MdInputModule, MdButtonToggleModule, MdSlideToggleModule,
    MdSelectModule, MdToolbarModule, MdTabsModule, MdTooltipModule, MdCoreModule, MdAutocompleteModule,
    MdProgressBarModule,
} from '@angular/material';

import {
    CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentFileModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentChipsModule, CovalentDataTableModule, CovalentJsonFormatterModule,
    CovalentMessageModule,
} from '@covalent/core';

import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CovalentTextEditorModule } from '@covalent/text-editor';

// import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
    declarations: [
        FormComponent,
        LogsComponent,
        DetailComponent,
        FeaturesFormComponent,
        SubSystemFeaturesComponent,
        SubSystemStatsComponent,
        SubSystemOverviewComponent,
        DashboardComponent,
        DashboardSubSystemComponent,
        NavigationComponent,
    ],
    imports: [
        /** Angular Modules */
        CommonModule,
        FormsModule,
        /** Material Modules */
        MdCoreModule,
        MdCheckboxModule,
        MdButtonModule,
        MdListModule,
        MdIconModule,
        MdCardModule,
        MdMenuModule,
        MdInputModule,
        MdSelectModule,
        MdButtonToggleModule,
        MdSlideToggleModule,
        MdToolbarModule,
        MdTabsModule,
        MdTooltipModule,
        MdProgressBarModule,
        MdAutocompleteModule,
        /** Covalent Modules */
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
        CovalentExpansionPanelModule,
        CovalentStepsModule,
        CovalentDialogsModule,
        CovalentLoadingModule,
        CovalentSearchModule,
        CovalentPagingModule,
        CovalentFileModule,
        CovalentNotificationsModule,
        CovalentMenuModule,
        CovalentChipsModule,
        CovalentJsonFormatterModule,
        CovalentDataTableModule,
        CovalentHighlightModule,
        CovalentMarkdownModule,
        CovalentDynamicFormsModule,
        CovalentMessageModule,
        CovalentCodeEditorModule,
        CovalentTextEditorModule,
        DocumentationToolsModule,
        NgxChartsModule,
        TranslateModule,
        dashboardRoutes,
        ToolbarModule,
        CovalentHttpModule.forRoot({
            interceptors: [{
                interceptor: RequestInterceptor, paths: ['**'],
            }],
        }),
    ],
})
export class DashboardModule {

}

