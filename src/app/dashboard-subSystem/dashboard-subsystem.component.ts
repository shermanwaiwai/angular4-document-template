import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'qs-dashboard-subsystem',
  templateUrl: './dashboard-subsystem.component.html',
  styleUrls: ['./dashboard-subsystem.component.scss'],
})
export class DashboardSubSystemComponent implements AfterViewInit, OnInit {

  title: string;
  selectedSubSystem: string = 'ACL';
  constructor(private _titleService: Title,
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService) { }

  ngOnInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title = this._titleService.getTitle();
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }
}
