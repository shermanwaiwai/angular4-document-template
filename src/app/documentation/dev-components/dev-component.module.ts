import { ToolbarModule } from '../toolbar/toolbar.module';
import { ChartDevVersionComponent } from './chart-dev-version/chart-dev-version.component';
import { TreeDevVersionComponent } from './tree-dev-version/tree-dev-version.component';
import { DatagridDevVersionComponent } from './datagrid-dev-version/datagrid-dev-version.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DevextremeComponent } from './dev-component.component';
import { ComponentsOverviewComponent } from './overview/overview.component';
import { componentsRoutes } from './dev-component.route';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { componentsRoutes } from './components.routes';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import {
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

// import { CovalentHighlightModule } from '../../../platform/highlight';
// import { CovalentMarkdownModule } from '../../../platform/markdown';
// import { CovalentDynamicFormsModule } from '../../../platform/dynamic-forms';
// import { CovalentCodeEditorModule } from '../../../../node_modules/@covalent/code-editor';
// import { CovalentTextEditorModule } from '../../../../node_modules/@covalent/text-editor';

import { DocumentationToolsModule } from '../../documentation-tools';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { DevExtremeModule } from 'devextreme-angular';
// import { ToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
    declarations: [
        DevextremeComponent,
        ComponentsOverviewComponent,
        DatagridDevVersionComponent,
        DatagridComponent,
        TreeDevVersionComponent,
        ChartDevVersionComponent,
    ],
    imports: [
        /** Angular Modules */
        CommonModule,
        FormsModule,
        /** Material Modules */
        MdCoreModule,
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
        DevExtremeModule,
        componentsRoutes,
        ToolbarModule,
    ],
    exports: [
        DevExtremeModule,
    ],
})
export class DevComponentModule {

}

