import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



/*
  Generated class for the SandValCalcPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/sand/sand.html',
})
export class SandPage {
  test3: any;
  constructor(private navCtrl: NavController) {

  }

  onChange(data) : void {
    var test3 = data;
          
}

fix(data) {
  this.test3 = data;
}

}
