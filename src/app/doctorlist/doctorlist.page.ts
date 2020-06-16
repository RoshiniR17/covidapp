import { Component, OnInit } from '@angular/core';
import {PopoverController}from '@ionic/angular';
import{NotificationsComponent}from '../notifications/notifications.component';


@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.page.html',
  styleUrls: ['./doctorlist.page.scss'],
})
export class DoctorlistPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) {}
  async notifications(ev: any) {  
    const popover = await this.popoverCtrl.create({  
        component: NotificationsComponent,  
        event: ev,  
        animated: true,  
        showBackdrop: true  
    });  
    return await popover.present();
  }

  ngOnInit() {
  }


}
