import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";
import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the NewPlace page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html'
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat:0,lng:0};
  message: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private PlacesService: PlacesService,
    private geolocation: Geolocation
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(value: {title: string}) {
    this.PlacesService.addPlace(
      {
        title: value.title,
        location: this.location
      });
    this.navCtrl.pop();
  }

  onLocateUser() {
    this.geolocation.getCurrentPosition()
      .then((location) => {
        console.log('location fetched successfully ' + location);
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
        this.message = "Location data fetched correctly!!";
      })
      .catch((err) => {
        console.log('An error ocurred');
      });
  }
}
