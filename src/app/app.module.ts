import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { ImovelCartaoComponent } from './imovel-cartao/imovel-cartao.component';
import { ImoveisService } from './services/imoveis.service';

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
  providers: [ImoveisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
