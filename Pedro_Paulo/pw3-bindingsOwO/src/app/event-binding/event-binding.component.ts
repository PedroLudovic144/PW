import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  exibeTexto: boolean=false
  alertar(){
    alert("Receba")
  }
  mostrar(){
    if (this.exibeTexto == true) {
      this.exibeTexto = false
    } else {
      this.exibeTexto = true
    }

    alert(this.exibeTexto)
  this.exibeTexto = !this.exibeTexto
  alert(this.exibeTexto)
  }
}
