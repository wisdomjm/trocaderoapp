import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as Leaflet from 'leaflet';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { antPath } from 'leaflet-ant-path'



@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
 
  //map: Leaflet.Map;
  map: any;
  public lat: any;
  public lon: any;

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
 

  constructor(
  
  ) { 

  }


  ngOnInit() {
    //this.getCurrentPosition();
   
    //this.leafletMap();
  }



  leafletMap() {
    this.map = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'TrocaderoApp',  
    }).addTo(this.map);

  }






  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          console.log("Tu Posicion es: ", this.lat +" - "+this.lon);
          //this.GeoleafletMap(this.lat, this.lon);
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }






}
