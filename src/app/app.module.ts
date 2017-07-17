import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { ImovelCartaoComponent } from './imovel-cartao/imovel-cartao.component';
import { ImoveisService } from './services/imoveis.service';
import { FormularioListaComponent } from './formulario-lista/formulario-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularListComponent,
    ImovelCartaoComponent,
    FormularioListaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule   
  ],
  providers: [ImoveisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
