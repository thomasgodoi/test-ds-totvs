import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  imports: [
    AppComponent,
    SwitchComponent,
    BrowserModule,
  ],
})
export class AppModule { }
