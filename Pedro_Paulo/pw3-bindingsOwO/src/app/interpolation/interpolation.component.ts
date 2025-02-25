import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'Hello World';

  somar(n1: number,n2: number){
    return n1 + n2;
  }
}
