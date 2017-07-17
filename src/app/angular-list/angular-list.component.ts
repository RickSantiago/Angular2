import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  imoveis: Array<any>;

  constructor(private http: Http)  { }

  ngOnInit() {
    //fazer requisicao http
    this.http.get('dados/imoveis.json').map(res => res.json()).subscribe(data => console.log(data));
  }

}
