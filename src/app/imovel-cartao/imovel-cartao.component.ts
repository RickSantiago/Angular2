import { Component, OnInit, Input } from '@angular/core';
import { Imovel } from './../imovel'

@Component({
  selector: 'app-imovel-cartao',
  templateUrl: './imovel-cartao.component.html',
  styleUrls: ['./imovel-cartao.component.css']
})
export class ImovelCartaoComponent implements OnInit {

  @Input('imovel') imovel: Imovel;
  constructor() { }

  ngOnInit() {
    let quartos = this.imovel.quartos;
    let banheiros = this.imovel.banheiros;
    
  }

}
