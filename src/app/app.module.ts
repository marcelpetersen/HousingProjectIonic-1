import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { HTTP } from '@ionic-native/HTTP';
import { StatusBar } from '@ionic-native/status-bar';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { CameraPage } from '../pages/camera/camera';
import { ModalPage } from '../pages/modal/modal';
import { HomeDetailPage } from '../pages/home-detail/home-detail';
import { HistoryPage } from '../pages/history/history';
import { HomeDetailPopoverPage } from '../pages/home-detail-popover/home-detail-popover'; 
import { LoginPage } from '../pages/login/login';
import { MypostsPage } from '../pages/myposts/myposts';
import { FavouritesPage } from '../pages/favourites/favourites';
import { DraftsPage } from '../pages/drafts/drafts';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { ImagePickerPage } from '../pages/image-picker/image-picker';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { FacetPage } from '../pages/facet/facet';
import { Camera } from '@ionic-native/camera';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';
import { SignupPage } from '../pages/signup/signup';
import { GalleryPage } from '../pages/gallery/gallery';


import { SpinnerDialog } from '@ionic-native/spinner-dialog';

import { AuthProvider } from '../providers/auth/auth';
import { DatabaseProvider } from '../providers/database/database';

import * as firebase from 'firebase/app';

firebase.initializeApp({
        apiKey: "AIzaSyDYfzqcaXSUNRKhVM60RXQaQsIOp0Amsbo",
        authDomain: "finalyearhousingproject.firebaseapp.com",
        databaseURL: "https://finalyearhousingproject.firebaseio.com",
        projectId: "finalyearhousingproject",
        storageBucket: "finalyearhousingproject.appspot.com",
        messagingSenderId: "1021387443585"
    });

@NgModule({
  declarations: [
    MyApp,
    ModalPage,
    CameraPage,
    HomeDetailPage,
    HomeDetailPopoverPage,
    LoginPage,
    AutocompletePage,
    SignupPage,
    AccountPage,
    ImagePickerPage,
    ResetPasswordPage,
    FacetPage,
    HistoryPage,
    MypostsPage,
    FavouritesPage,
    DraftsPage,
    SettingsPage,
    HomePage,
    TabsPage,
    GalleryPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    FacetPage,
    HistoryPage,
    CameraPage,
    AutocompletePage,
    ImagePickerPage,
    HomeDetailPopoverPage,
    SignupPage,
    MypostsPage,
    FavouritesPage,
    DraftsPage,
    SettingsPage,
    AccountPage,
    ResetPasswordPage,
    HomeDetailPage,
    HomePage,
    ModalPage,
    TabsPage,
    GalleryPage,
    MapPage
  ],
  providers: [
    NativePageTransitions,
    StatusBar,
    AuthProvider,
    SpinnerDialog,
    Camera,
    NativeGeocoder,
    HTTP,
    AutocompletePage,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DatabaseProvider,
  ]
})
export class AppModule {}
