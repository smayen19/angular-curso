import {Component} from '@angular/core'

@Component({
  selector: 'app_contador',
  template: `
      <h1>{{ title }}</h1>


    <H2> la base es <strong> numeroExercise </strong></H2>

    <button (click)="baseQuinta()"> + {{numero}} </button>

    <span> {{ numeroExercise}} </span>

    <button (click)="baseQuinta(-5)"> - {{numero}} </button>

    `
})

export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 5;
  numeroExercise: number = 5

  baseQuinta( base: number = 5){
    this.numeroExercise += base;
  }
}
