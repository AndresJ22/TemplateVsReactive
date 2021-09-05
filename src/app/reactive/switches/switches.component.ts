import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    });
    //RXJS
    // this.miFormulario.valueChanges.subscribe(valor => {
    //   delete valor.condiciones;
    //   console.log(valor);
    // })

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      this.persona = rest;
    })

    // un campo en especifico
    //RXJS
    this.miFormulario.controls.condiciones.valueChanges.subscribe(valor => {
      console.log(valor);
    })
  }
  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    this.persona = formValue;
    console.log(formValue);
  }

}
