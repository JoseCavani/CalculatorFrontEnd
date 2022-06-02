import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';


  public num1:number;
  public num2:number;
  public num3: number;

  adicionar(){
    this.num3=this.num1+this.num2;
  }
  subtrair(){
    this.num3=this.num1-this.num2;
  }
  multiplica(){
    this.num3=this.num1*this.num2;
  }
  dividir(){
    this.num3=this.num1/this.num2;
  }



}

