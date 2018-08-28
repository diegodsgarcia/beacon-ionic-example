import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var evothings: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  beacon: any;

  constructor(
    private platform: Platform,
    private change: ChangeDetectorRef
  ) {}

  escanearBeacons() {
    if (this.platform.is('cordova')) { 
      evothings.eddystone.startScan(
        dados => {
          this.beacon = dados;

          setTimeout(() => this.change.detectChanges(), 1000);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
