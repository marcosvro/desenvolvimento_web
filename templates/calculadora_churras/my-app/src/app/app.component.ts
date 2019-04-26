import {Component, NgModule} from '@angular/core';
import {debug} from 'util';

export interface Section {
  name: string;
  listed: boolean;
  qt: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Calculadora de churrasco';
  step = 0;
  homens = 0;
  mulheres = 0;
  criancas = 0;
  carne_homens = 0.4;
  carne_mulheres = 0.3;
  carne_criancas = 0.2;
  qt_carnes = 0;
  kg_cada_carne = 0;

  carneBovina: Section[] = [
    {
      name: 'Picanha',
      listed: false,
      qt: 0
    },
    {
      name: 'Alcatra',
      listed: false,
      qt: 0
    },
    {
      name: 'Contra Filé',
      listed: false,
      qt: 0
    },
    {
      name: 'Carne de Sol',
      listed: false,
      qt: 0
    },
    {
      name: 'Fraudinha',
      listed: false,
      qt: 0
    },
    {
      name: 'Maminha',
      listed: false,
      qt: 0
    },
    {
      name: 'Pernil de Cordeiro',
      listed: false,
      qt: 0
    }
  ];
  linguicas: Section[] = [
    {
      name: 'Linguiça de Frango',
      listed: false,
      qt: 0
    },
    {
      name: 'Linguiça Toscana',
      listed: false,
      qt: 0
    }
  ];
  carneFrango: Section[] = [
    {
      name: 'Coração de Frango',
      listed: false,
      qt: 0
    },
    {
      name: 'Coxa e Sobrecoxa',
      listed: false,
      qt: 0
    }
  ];
  peixes: Section[] = [
    {
      name: 'Tilápia',
      listed: false,
      qt: 0
    },
    {
      name: 'Caranha',
      listed: false,
      qt: 0
    }
  ]

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onChangeCheckBox(iten) {
    iten.listed = !iten.listed;
    if (iten.listed)
      this.qt_carnes++;
    else
      this.qt_carnes--;
    var total_carnes: number = this.carne_homens*this.homens + this.carne_mulheres*this.mulheres + this.carne_criancas*this.criancas;
    this.kg_cada_carne = (total_carnes/this.qt_carnes).toFixed(3);
    console.log(this.kg_cada_carne);
    console.log(this.qt_carnes);
  }

  onChangeHomens(event) {
    this.homens = event.target.value;
    console.log(this.homens);
  }

  onChangeMulheres(event) {
    this.mulheres = event.target.value;
    console.log(this.mulheres);
  }

  onChangeCriancas(event) {
    this.criancas = event.target.value;
    console.log(this.criancas);
  }
}
