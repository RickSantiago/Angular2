import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { ImovelCartaoComponent } from './imovel-cartao/imovel-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularListComponent,
    ImovelCartaoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
