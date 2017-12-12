import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MypostsPage } from '../../pages/myposts/myposts';
import { FavouritesPage } from '../../pages/favourites/favourites';
import { SettingsPage } from '../../pages/settings/settings';
import { HomeDetailPage } from '../home-detail/home-detail';
import { DraftsPage } from '../drafts/drafts';
import { AuthProvider } from '../../providers/auth/auth'

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  tab0Root: any = MypostsPage;
  tab1Root: any = FavouritesPage;
  tab2Root: any = DraftsPage;
  tab3Root: any = SettingsPage;
  displayName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
        this.displayName = this.auth.getCurrentUser().displayName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
}
