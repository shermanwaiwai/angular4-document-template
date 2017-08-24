import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide.component';
import { LogoComponent } from './logo/logo.component';
import { ProductIconsComponent } from './product-icons/product-icons.component';
import { TypographyComponent } from './typography/typography.component';
import { IconographyComponent } from './iconography/iconography.component';
import { ColorsComponent } from './colors/colors.component';
import { UtilityStylesComponent } from './utility-styles/utility-styles.component';

const routes: Routes = [{
  children: [{
    component: LogoComponent,
    path: 'logo',
  }, {
    component: ColorsComponent,
    path: 'colors',
  }, {
    component: TypographyComponent,
    path: 'typography',
  }, {
    component: IconographyComponent,
    path: 'iconography',
  }, {
    component: ProductIconsComponent,
    path: 'product-icons',
  }, {
    component: UtilityStylesComponent,
    path: 'utility-styles',
  }],
  component: StyleGuideComponent,
  path: 'style',
}];

export const styleGuideRoutes: any = RouterModule.forChild(routes);
