import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre: String;
  capital : String;
  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    return this.capital === "Madrid" ? true : false; 
  }

}
