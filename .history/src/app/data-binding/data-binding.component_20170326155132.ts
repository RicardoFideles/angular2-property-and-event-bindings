import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loaiane.com';

  cursoAngular:boolean = true;

  urlImagem = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onClick() {
    alert('botao clicado!')
  }

  onKeyup(event) {
    console.log(event.)
  }

}