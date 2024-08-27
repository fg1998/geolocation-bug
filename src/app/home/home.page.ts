import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, NgFor],
})
export class HomePage {
  log: string[] = [];
  constructor() {}

  async get() {
    try {
      this.log = [];
      this.log.push('Init');
      const check = await Geolocation.checkPermissions();
      this.log.push(`Permissions : ${JSON.stringify(check)}`);
      const resp = await Geolocation.getCurrentPosition();
      this.log.push(`* - ${JSON.stringify(resp)}`);
    } catch (err:any) {
      this.log.push(`error : ${JSON.stringify(err)} `);
    }
  }
}
