import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent implements OnInit {

  // miFormulario ... this.fb..{ nombre: ... '' , required, minlength(3)}
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Resident Evil 5']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar() {
    // imprimir el valor del formulario solo si es valido
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();// restaura pristine y touched
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    // this.favoritosArr.push(
    //   new FormControl(this.nuevoFavorito.value, Validators.required)
    // );
    this.favoritosArr.push(this.fb.control([this.nuevoFavorito, Validators.required]));
    this.nuevoFavorito.reset();
  }
  borrar(index: number) {
    this.favoritosArr.removeAt(index);
  }

  campoEsValido(campo: string) {
    return this.miFormulario?.controls[campo]?.errors &&
      this.miFormulario.controls[campo].touched
  }
}
