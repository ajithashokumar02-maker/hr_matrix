import { Component, OnInit, ViewChild } from '@angular/core';
import * as textConfiguration from "../../../assets/text-configuration/static-text-config.json";
import { CommonService } from 'src/app/service/common.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  staticTextConfig = textConfiguration;
  sideNavBar: Array<any> = [];
  isMobile: boolean = false;
  isCollapsed: boolean = false;
  sidenavOpen: boolean = true;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(
    private readonly _commonService: CommonService,
    private readonly _breakpointObserver: BreakpointObserver
  ) {
    this._breakpointObserver
  .observe([Breakpoints.Handset])
  .subscribe(result => {
    this.isMobile = result.matches;

    if (this.isMobile) {
      this.sidenavOpen = false;
    } else {
      this.sidenavOpen = true;
    }
  });

  }

  ngOnInit(): void {
    this.sideNavBar = this._commonService.getSideBarConfig();
    console.log(this.staticTextConfig?.common?.sidebar);
  }

  toggleSidenav() {
  this.sidenavOpen = !this.sidenavOpen;
}

closeSidenavOnMobile() {
  if (this.isMobile) {
    this.sidenavOpen = false;
  }
}

}
