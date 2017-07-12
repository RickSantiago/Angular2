import { Component, OnInit } from '@angular/core';
import { moveis } from './../dados/moveis';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  moveis: Array<any> = moveis;

  constructor() { }

  ngOnInit() {
  }

}
