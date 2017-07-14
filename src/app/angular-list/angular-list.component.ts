import { Component, OnInit } from '@angular/core';
import { imoveis } from './../dados/imoveis';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  imoveis: Array<any> = imoveis;

  constructor() { }

  ngOnInit() {
  }

}
