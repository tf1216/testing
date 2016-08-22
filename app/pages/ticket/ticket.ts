import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AlertController} from 'ionic-angular';

import {SandPage} from '../sand/sand';
import {ConfirmPage} from '../alerts/confirm';

/*
  Generated class for the TicketPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/ticket/ticket.html',
})
export class TicketPage {
  disabledLoaded: string;
  disabledUnloaded: string;
  disabledComplete: string;

  constructor(private navCtrl: NavController, navParams: NavParams, public alerCtrl: AlertController) {
    this.disabledLoaded = 'true';
    this.disabledUnloaded = 'true';
    this.disabledComplete = 'true';
		//this.isAndroid = platform.is('android');

  }

  gotoSandValCalc(event) {
    this.navCtrl.push(SandPage);
	};

  clickStarted(event) {
    let confirm = this.alerCtrl.create({
      title: 'Starting:',
      message: 'Are you ready to get started?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Yes');
            this.disabledLoaded = null;
          }
        }
      ]
    });
    confirm.present()
  }
  clickLoaded(event) {
    let confirm = this.alerCtrl.create({
      title: 'Starting:',
      message: 'Are you ready to get started?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Yes');
            this.disabledLoaded = null;
          }
        }
      ]
    });
    confirm.present()
  }
  clickUnloaded(event) {
    let confirm = this.alerCtrl.create({
      title: 'Starting:',
      message: 'Are you ready to get started?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Yes');
            this.disabledLoaded = null;
          }
        }
      ]
    });
    confirm.present()
  }
  clickComplete(event) {
    let confirm = this.alerCtrl.create({
      title: 'Starting:',
      message: 'Are you ready to get started?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('No');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Yes');
            this.disabledLoaded = null;
          }
        }
      ]
    });
    confirm.present()
  }


}
