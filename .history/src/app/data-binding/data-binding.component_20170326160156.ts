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

  conteudoAtual:string = '';
  conteudoSalvo:string = '';

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

  onKeyup(event:KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave() {
    this.conteudoSalvo = valor;
  }

}
