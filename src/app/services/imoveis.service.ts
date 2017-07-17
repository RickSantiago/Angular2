import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ImoveisService {

  public novoImovelSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllImoveis(){
      return this.http.get('dados/imoveis.json').map(res => res.json());
  }

  adicionarImovel(data){
    data.imagem = 'default-crib';
    this.novoImovelSubject.next(data);
  }

}
