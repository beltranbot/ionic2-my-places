import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  lat: number;
  lng: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
      this.lat = this.navParams.data.location.lat;
      this.lng = this.navParams.data.location.lng;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
