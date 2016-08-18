import {Component} from '@angular/core';

import {NavController, NavParams  } from 'ionic-angular';
import { ModalController , ViewController , Platform } from 'ionic-angular';
import { AlertController , LoadingController }  from 'ionic-angular';



//  templateUrl: 'build/pages/modals/modals.html'



@Component({
  templateUrl: 'build/pages/home/home.html'

})



 class HomePage {
  // selectedItem: any;
   public items:any;
   public viewCtrl: ViewController

  constructor(private nav: NavController,private alertController:AlertController,public modalController:ModalController , private loadingController: LoadingController) {
       //this.selectedItem = navParams.get('item');
      this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'',icon:'md-contacts',num:0,page:'http://www.google.com'},
        { title:'สาเหตุ',description:'',icon:'ios-git-compare-outline',num:1 , },
        { title:'โอกาสจะเกิดซ้ำ',description:'',icon:'ios-git-network-outline',num:2 , },
        { title:'ปัญหาที่พบและการแก้ไข',description:'',icon:'ios-image',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'',icon:'ios-medal-outline',num:4},
      ];






  }

   /* ทดสอบ */
   showAlert(){
     let alert=this.alertController.create({
         title:'test',

     });
     alert.present();
   }



   openModal(characterNum) {
      let modal = this.modalController.create(ModalsContentPage, characterNum);
       modal.present();
     }





     openPage(characterNum) {
       // close the menu when clicking a link from the menu
      // this.menu.close();
       // navigate to the new page if it is not the current page
    //  let send =   this.NavController.create(characterNum.page);
      //   send.present();

      
        //  return modal;

     }






}










//-------------  content modal

@Component({

  templateUrl: 'build/pages/modals/modals.html'
  //  template:'<ion-nav [root]="rootPage"></ion-nav>'
})
class ModalsContentPage {
  character;



  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  )
  {


    var characters = [
      {
        name: 'ภาวะปากแหว่งเพดานโหว่',
        quote: 'ภาวะปากแหว่ง-เพดานโหว่ เป็นความผิดปกติของใบหน้าบริเวณปากและเพดานที่พบในเด็กแรกเกิด '
                + '"มีลักษณะปรากฏได้หลายอย่าง ได้แก่ "'
                +  '  ชนิดปากแหว่งอย่างเดียว   '
                ,
      //  discripttion:'',
        image: 'image/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      /*
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
      */

    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }




}
