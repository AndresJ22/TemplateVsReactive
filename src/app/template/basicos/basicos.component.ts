import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: 'RXTL 1100',
    precio: 10,
    existencia: 10
  }
  constructor() { }

  ngOnInit(): void {

  }
  nombreValido(): boolean {
    return this.miFormulario?.controls?.producto?.invalid &&
      this.miFormulario?.controls?.producto?.touched;
  }
  precioValido(): boolean {
    this.miFormulario?.controls?.precio?.setErrors(null)
    return this.miFormulario?.controls?.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0;
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario);
    console.log('Posteo Correcto');
    this.miFormulario.reset(
      {
        precio: '0',
        existencia: '0',
        producto: 'algo',
      }
    );
  }
}
