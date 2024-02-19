import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter :  {{counter}}</h3>
    <button (click)="incrementBy(+1)">+1</button>
    <button (click)="decrementBy(1)"> -1 </button>
    <button (click)="reset()">reset</button>`
})
export class CounterComponent{
  counter: number =  10;

  incrementBy(value:number):void{
    this.counter += value;
  }

  decrementBy(value: number):void{
    this.counter -= value;
  }

  reset(){
    this.counter = 10;
  }
}
