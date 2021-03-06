import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerEspectre } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  // TODO: Temporal


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerEspectre]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: this.validatorService.camposIguales('password', 'password2')
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'El email es obligatorio';
    } else if (errors?.pattern) {
      return 'El email no es valido';
    } else if (errors?.emailTomado) {
      return 'El email ya esta tomado';
     }

    return '';
  }


  constructor(private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Joel Andres',
      email: 'joel.andres12@hotmail.com'
    })
    // console.log(this.miFormulario);
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
