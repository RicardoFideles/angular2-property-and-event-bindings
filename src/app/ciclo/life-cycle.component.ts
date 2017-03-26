import { Component, ViewChild, Input,OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'life-cycle',
    template: `
        <p #plocal> {{ valorInicial }} </p>
        <p> === == {{ plocal.textContent }} , texto</p>
    `,  
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy  {
    
    @Input() valorInicial = 10

    @ViewChild('plocal') plocal: HTMLElement;

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
        console.log(this.plocal);
     }

     ngOnChanges() {
        console.log('ngOnChanges');
     }
     
     ngDoCheck() {
        console.log('ngDoCheck');
     }

     ngAfterContentInit() {
        console.log('ngAfterContentInit');
     }

     ngAfterViewInit() {
         console.log('ngAfterViewInit');
     }
     
     ngAfterViewChecked() {
         console.log('ngAfterViewChecked');
     }
     
     ngOnDestroy() {
         console.log('ngOnDestroy');
     }

     //private 
}