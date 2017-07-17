import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ImoveisService } from './../services/imoveis.service';
// Import rxjs nao é mais necessario devido esta sendo chamado na service
// import 'rxjs/add/operator/map'

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  imoveis: Array<any>;
  error: string;

  constructor(
    private http: Http, 
    private imoveisService: ImoveisService)  { }

  ngOnInit() {
    //fazer requisicao http
    // this.http.get('dados/imoveis.json')
    // .map(res => res.json()) 
    // .subscribe(data => this.imoveis = data,
    // error => this.error = error.statusText
    // );

    // Listar atraves da requisicao http que esta instanciado na service
    // todos os dados que estao respresentado no arquivo.json
    this.imoveisService.getAllImoveis()
    .subscribe(
    data => this.imoveis = data,
    error => this.error = error.statusText
    );

    this.imoveisService.novoImovelSubject.subscribe(
      data => console.log(data)
    );
  }

}
