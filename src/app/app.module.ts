import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { ImovelCartaoComponent } from './imovel-cartao/imovel-cartao.component';
import { ImoveisService } from './services/imoveis.service';
import { UtilsService } from './services/utils.service';
import { FormularioListaComponent } from './formulario-lista/formulario-lista.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AngularListComponent,
    ImovelCartaoComponent,
    FormularioListaComponent,
    SortByPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule   
  ],
  providers: [ImoveisService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
