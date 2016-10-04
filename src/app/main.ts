

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//Angular - library for using Angular in a web browser with JIT compilation

import { AppModule } from './app.module';
// Application module for this application

import { enableProdMode } from '@angular/core';

//enableProdMode(); //Uncomment for production
platformBrowserDynamic().bootstrapModule(AppModule)
  .then((success: any) => console.log('App bootstrapped'))
  .catch((err: any) => console.error(err));