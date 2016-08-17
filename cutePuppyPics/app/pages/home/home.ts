import {Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { ModalController , ViewController , Platform } from 'ionic-angular';

import { AlertController , LoadingController }  from 'ionic-angular';



@Component({
  templateUrl: 'build/pages/home/home.html'

})
export class HomePage {
  // selectedItem: any;
   public items:any;
 public viewCtrl: ViewController

  constructor(private nav: NavController,private alertController:AlertController,public modalController:ModalController , private loadingController: LoadingController) {
       //this.selectedItem = navParams.get('item');
      this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'',icon:'ios-arrow-dropright',num:0},
        { title:'สาเหตุ',description:'',icon:'ios-arrow-dropright',num:1 },
        { title:'โอกาสจะเกิดซ้ำ',description:'',icon:'ios-arrow-dropright',num:2},
        { title:'ปัญหาที่พบและการแก้ไข',description:'',icon:'ios-arrow-dropright',num:3},
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'',icon:'ios-arrow-dropright',num:4},
      ];

  }

   /* ทดสอบ */
   showAlert(){
     let alert=this.alertController.create({
         title:'test',

     });
     alert.present();
   }

   presentModal(){
     let modal=this.modalController.create(ModalController);
     modal.present();
   }

   openModal(characterNum) {

       let modal = this.modalController.create(ModalsContentPage, characterNum);
       modal.present();
     }


     presentLoading() {
        let loader = this.loadingController.create({
          content: "Please wait...",
          duration: 3000
        });
        loader.present();
      }




}


@Component({
  //templateUrl: './build/pages/modals/basic/modal-content.html'
    templateUrl: 'build/pages/modals/modals.html'
})
class ModalsContentPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'image/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'image/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
       image: 'image/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'image/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'image/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
