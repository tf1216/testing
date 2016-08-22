import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ContactPage} from '../contact/contact';
import {TabsPage} from '../tabs/tabs';
import {Platform} from 'ionic-angular';
import {TicketPage} from '../ticket/ticket';

@Component({
  templateUrl: 'build/pages/test/test.html'

})

export class TestPage {
	disabledButton:string;

	 pet: string = "puppies";
  	isAndroid: boolean = false;

	constructor(public navCtrl: NavController, navParams: NavParams, platform: Platform){
	//	constructor(private tabs: TabsPage){
		this.disabledButton = 'true';
		this.isAndroid = platform.is('android');
	}

//var testInstance = new TestPage("Andrew");

itemTapped(event) {
	//USE THIS LINE FOR AFTER LOGIN / STARTS THE APP OFF WITH TabsPage
	//this.navCtrl.setRoot(TabsPage);
	//ON BUTTON PRESS -> CONTACT PAGE
	this.navCtrl.parent.select(2)
	//this.tabs.select(1);
    //this.navCtrl.push(ContactPage) 
	};

gotoTicket(event) {
    this.navCtrl.push(TicketPage);
	};

itemTapped2(event) {
	this.disabledButton = null;
	};


} 