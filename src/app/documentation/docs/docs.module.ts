import { ToolbarModule } from '../toolbar/toolbar.module';
import { DocumentationToolsModule } from '../../documentation-tools';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentHighlightModule } from '@covalent/highlight';

import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
} from '@covalent/core';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { docsRoutes } from './docs.routes';

import { DocsComponent } from './docs.component';
import { DocsOverviewComponent } from './overview/overview.component';
import { CreatingComponent } from './creating/creating.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AngularComponent } from './angular/angular.component';
import { BuildTasksComponent } from './build-tasks/build-tasks.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { IconsComponent } from './icons/icons.component';
import { TestingComponent } from './testing/testing.component';
import { ThemeComponent } from './theme/theme.component';
import { MockDataComponent } from './mock-data/mock-data.component';
import {
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdCardModule,
  MdToolbarModule,
  MdCoreModule,
  MdMenuModule,
} from '@angular/material';

// import { ToolbarModule } from '../../components/toolbar/toolbar.module';
const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
];

@NgModule({
  declarations: [
    DocsComponent,
    DocsOverviewComponent,
    CreatingComponent,
    AngularMaterialComponent,
    AngularComponent,
    BuildTasksComponent,
    DeploymentComponent,
    IconsComponent,
    TestingComponent,
    ThemeComponent,
    MockDataComponent,
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    /** Material Modules */
    MdCoreModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    /** Covalent Modules */
    DocumentationToolsModule,
    COVALENT_MODULES,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    docsRoutes,
    ToolbarModule,
  ],
})
export class DocsModule {

}

