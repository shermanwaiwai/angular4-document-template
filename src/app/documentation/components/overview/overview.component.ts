import { slideInDownAnimation } from '../../../../app.animations';
import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'components-overview',
  styleUrls: ['./overview.component.scss'],
  templateUrl: './overview.component.html',
  animations: [slideInDownAnimation],
})
export class ComponentsOverviewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    color: 'deep-purple-A700',
    icon: 'view_list',
    route: '/components/steps',
    title: 'Stepper',
  }, {
    color: 'blue-A700',
    icon: 'open_with',
    route: '/components/expansion-panel',
    title: 'Expansion Panel',
  }, {
    color: 'pink-A700',
    icon: 'space_bar',
    route: '/components/file-input',
    title: 'File Input',
  }, {
    color: 'cyan-A700',
    icon: 'attach_file',
    route: '/components/file-upload',
    title: 'File Upload',
  }, {
    color: 'deep-orange-A700',
    icon: 'label',
    route: '/components/chips',
    title: 'Chips',
  }, {
    color: 'lime-A700',
    icon: 'hourglass_empty',
    route: '/components/loading',
    title: 'Loading',
  }, {
    color: 'amber-A700',
    icon: 'open_in_browser',
    route: '/components/dialogs',
    title: 'Simple Dialogs',
  }, {
    color: 'green-A700',
    icon: 'grid_on',
    route: '/components/data-table',
    title: 'Data Table',
  }, {
    color: 'teal-A700',
    icon: 'format_indent_increase',
    route: '/components/json-formatter',
    title: 'JSON Formatter',
  }, {
    color: 'indigo-A700',
    icon: 'swap_horiz',
    route: '/components/paging',
    title: 'Paging',
  }, {
    color: 'purple-A700',
    icon: 'notifications',
    route: '/components/notifications',
    title: 'Notifications',
  }, {
    color: 'light-blue-A700',
    icon: 'info_outline',
    route: '/components/message',
    title: 'Messages',
  }, {
    color: 'indigo-A700',
    icon: 'search',
    route: 'search',
    title: 'Search',
  }, {
    color: 'red-A700',
    icon: 'devices',
    route: '/components/media',
    title: 'Media Queries',
  }, {
    color: 'light-blue-A700',
    icon: 'wb_iridescent',
    route: 'directives',
    title: 'Directives',
  }, {
    color: 'deep-orange-A700',
    icon: 'filter_list',
    route: '/components/pipes',
    title: 'Pipes',
  },
  {
    color: 'amber-A700',
    icon: 'theaters',
    route: '/components/animations',
    title: 'Animations',
  },
  ];
  optional: Object[] = [{
    color: 'pink-A700',
    icon: 'code',
    route: '/components/syntax-highlighting',
    title: 'Highlighting',
  }, {
    color: 'orange-A700',
    icon: 'chrome_reader_mode',
    route: '/components/markdown',
    title: 'Markdown Parser',
  }, {
    color: 'green-A700',
    icon: 'format_align_center',
    route: '/components/dynamic-forms',
    title: 'Dynamic Forms',
  }, {
    color: 'purple-A700',
    icon: 'featured_play_list',
    route: '/components/code-editor',
    title: 'Code Editor',
  }, {
    color: 'cyan-A700',
    icon: 'keyboard',
    route: '/components/text-editor',
    title: 'Markdown Text Editor',
  }, {
    color: 'indigo-A700',
    icon: 'http',
    route: '/components/http',
    title: 'HTTP Service',
  },
  ];
  external: Object[] = [{
    color: 'purple-A700',
    icon: 'insert_chart',
    route: '/components/ngx-charts',
    title: 'NGX-Charts',
  }, {
    color: 'blue-A700',
    icon: 'language',
    route: '/components/ngx-translate',
    title: 'NGX-Translate',
  },
  ];
}
