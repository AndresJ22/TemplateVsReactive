import { FormControl } from "@angular/forms";


//para nombre y apellido en solo campo
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
// para correo patter matcher
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


// para validar un palabra en especifico
export const noPuedeSerEspectre = (control: FormControl) => {
  const valor = control.value?.trim().toLowerCase();
  if (valor === 'espectre') {
    return {
      noEspectre: true
    }
  }
  return null;
}
/*
  // para validar un palabra en especifico
  noPuedeSerEspectre(control: FormControl) {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'espectre') {
      return {
        noEspectre: true
      }
    }
    return null;
  }*/
