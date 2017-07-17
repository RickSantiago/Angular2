import { Component, OnInit } from '@angular/core';
import { ImoveisService } from './../services/imoveis.service';

@Component({
  selector: 'app-formulario-lista',
  templateUrl: './formulario-lista.component.html',
  styleUrls: ['./formulario-lista.component.css']
})
export class FormularioListaComponent implements OnInit {

  tipoPropriedades: Array<string> = ['Casa', 'Duplex', 'Condominio', 'Fazenda'];
  constructor(
    public imoveisService: ImoveisService
    ) { }

  ngOnInit() {
  }

  inserirImovel(data): void {
    this.imoveisService.adicionarImovel(data);
  }

}
