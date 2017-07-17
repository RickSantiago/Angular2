import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImoveisService {

  constructor(private http: Http) { }

  getAllImoveis(){
      return this.http.get('dados/imoveis.json').map(res => res.json());
  }

}
