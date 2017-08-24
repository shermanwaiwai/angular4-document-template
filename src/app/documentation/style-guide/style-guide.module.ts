import { ToolbarModule } from '../toolbar/toolbar.module';
import {
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentSearchModule,
} from '@covalent/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { styleGuideRoutes } from './style-guide.routes';

import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo/logo.component';
import { ProductIconsComponent } from './product-icons/product-icons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { ColorsComponent } from './colors/colors.component';
import { UtilityStylesComponent } from './utility-styles/utility-styles.component';

import {
  MdButtonModule, MdListModule, MdIconModule, MdCardModule, MdToolbarModule, MdCoreModule, MdSnackBarModule,
  MdInputModule, MdMenuModule, MdSelectModule, MdGridListModule, MdTabsModule, MdSidenavModule,
  MdTooltipModule, MdProgressBarModule,
} from '@angular/material';

@NgModule({
  declarations: [
    StyleGuideComponent,
    LogoComponent,
    ProductIconsComponent,
    TypographyComponent,
    IconographyComponent,
    ColorsComponent,
    UtilityStylesComponent,
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
    MdToolbarModule,
    MdInputModule,
    MdMenuModule,
    MdSelectModule,
    MdGridListModule,
    MdTabsModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdProgressBarModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentExpansionPanelModule,
    CovalentHighlightModule,
    CovalentDialogsModule,
    CovalentMessageModule,
    styleGuideRoutes,
    ToolbarModule,
  ],
})
export class StyleGuideModule { }

