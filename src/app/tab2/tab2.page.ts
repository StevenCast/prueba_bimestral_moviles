import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  calcularRaices(){
    const operacion = (this.b **2)-(4*this.a*this.c);

    if(this.a ===0){
      this.resultado = "El valor de a no puede ser 0.";
      return;
    }

    if(operacion>0){
      const r1 = (-this.b+Math.sqrt(operacion))/(2*this.a);
      const r2 = (-this.b-Math.sqrt(operacion))/(2*this.a);

      this.resultado = `Las raices son: ${r1} y ${r2}`;
    }else if(operacion===0){
      const r = -this.b/(2*this.a);
      this.resultado=`La raíz doble es: ${r}`;
    }else{
      this.resultado = "Las raices son complejas"
    }
  }


}
