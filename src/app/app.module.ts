import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import {FormsModule} from '@angular/forms';
import { GetBugComponent } from './get-bug/get-bug.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBugComponent,
    GetBugComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
