import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  title = 'calculadora-imc';
  public ownerForm: FormGroup = new FormGroup({
      peso: new FormControl('', [Validators.required, Validators.min(0.1)]),
      altura: new FormControl('', [Validators.required, Validators.min(0.1)])
  });
  public imc: number;
  public exibe_imc: boolean = false;

  public calculaIMC = (ownerFormValue) => {
    if (this.ownerForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  private executeOwnerCreation = (ownerFormValue) => {
  	this.imc = (ownerFormValue.peso/(ownerFormValue.altura*ownerFormValue.altura)).toFixed(2);
  	this.exibe_imc = true;
  }
}
