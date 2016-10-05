import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}  from '@angular/forms';

import { AppComponent} from './app.component';
import { BasicFormComponent} from './basicForm/basicForm.component';
import { ModelFormComponent} from './modelForm/modelForm.component';
import { app_routing} from './app.routing';
 
@NgModule({
    imports : [BrowserModule,FormsModule,app_routing],
    declarations : [AppComponent, BasicFormComponent,ModelFormComponent],
    bootstrap : [ AppComponent]
})

export class AppModule{ }