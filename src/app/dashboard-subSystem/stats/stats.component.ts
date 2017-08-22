import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { single, multi } from './data';
import {
  TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent,
  TdDigitsPipe
} from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';

const NUMBER_FORMAT: any = (v: { value: number }) => v.value;
const DECIMAL_FORMAT: any = (v: { value: number }) => v.value.toFixed(2);

@Component({
  selector: 'qs-product-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class SubSystemStatsComponent implements OnInit {
  columns: any[] = [
    { name: 'name', label: '模組名稱' },
    { name: 'type', label: '類型' },
    { name: 'usage', label: '使用次數', numeric: true, format: NUMBER_FORMAT },
    // { name: 'quota', label: 'Quota (%)', numeric: true, format: DECIMAL_FORMAT },
    // { name: 'sessions', label: 'Sessions', numeric: true, format: NUMBER_FORMAT },
    // { name: 'containers', label: 'Containers', numeric: true, format: NUMBER_FORMAT },
  ];

  data: any[] = [
    {
      'name': '系統設定概括',
      'type': '(功能)選擇單項目',
      'usage': { 'value': 3000 },
    },
    {
      'name': '系統設定',
      'type': '(功能)選擇單項目',
      'usage': { 'value': 2000 },
    },
    {
      'name': '權限範圍',
      'type': '(功能)選擇單項目',
      'usage': { 'value': 1000 },
    },
    {
      'name': '執行',
      'type': '工具按鈕',
      'usage': { 'value': 100.0 },
    },
  ];

  // Chart
  single: any[];
  multi: any[];

  // Generic Chart options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  autoScale: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'X Axis';
  yAxisLabel: string = 'Y Axis';

  colorScheme: any = {
    domain: [
      '#01579B', '#0091EA', '#FFB74D', '#E64A19',
    ],
  };

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'name';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _titleService: Title,
    private _dataTableService: TdDataTableService) {
    // Chart Single
    Object.assign(this, { single });
    // Chart Multi
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  ngOnInit(): void {
    this._titleService.setTitle('Product Stats');
    this.filter();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }
  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
