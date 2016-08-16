import {Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  // selectedItem: any;
   public items:any;
  constructor(private nav: NavController) {
       //this.selectedItem = navParams.get('item');
      this.items=[
        { title:'ชนิดของ cleft',description:'1',icon:'ios-arrow-dropright'},
        { title:'สาเหตุ',description:'2',icon:'ios-arrow-dropright'},
        { title:'โอกาสจะเกิดซ้ำ',description:'3',icon:'ios-arrow-dropright'},
        { title:'ปัญหาที่พบและการแก้ไข',description:'4',icon:'ios-arrow-dropright'},
      ];

  }
}
