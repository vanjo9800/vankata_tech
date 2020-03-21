import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotyetdialogComponent } from './notyetdialog/notyetdialog.component';
import { MedialogComponent } from './medialog/medialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  menuOptions = ['Raspberry Pi 64-bit', 'Security News', 'Research', 'About me'];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openNotYetDialog(): void {
    this.dialog.open(NotyetdialogComponent, {
      width: '40vw'
    });
  }
  openMeDialog(): void {
    this.dialog.open(MedialogComponent, {
      width: '70vw'
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
