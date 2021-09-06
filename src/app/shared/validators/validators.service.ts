import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  //para nombre y apellido en solo campo
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // para correo patter matcher
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerEspectre = (control: FormControl): ValidationErrors | null => {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'espectre') {
      return {
        noEspectre: true
      }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;
      console.log(pass1, pass2);
      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noEsIgual: true });
        return { noIguales: true }
      }
      formGroup.get(campo2)?.setErrors(null);
      return null
    }
  }
}
