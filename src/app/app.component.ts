import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';
  //propiedades
  nombre = 'Belen';
  aniosEstudiando = 22;
  email = 'belenho.ti@gmail.com';
  activo = true;
  alumnos = [25, 28, 22];
  numero = 2;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'Ruffles',
      precio: 24.90
    },
    {
      id: 2,
      descripcion: 'Rancheritos',
      precio: 26.50
    },
    {
      id: 3,
      descripcion: 'Donitas Bimbo',
      precio: 22.75
    },
  ];

  //función que muestra si está activo o no
  //propiedades globales con .this
  esActivo(){
    if (this.activo) {
      return 'Estudiante activo'
    } else {
      return 'Estudiante inactivo'
    }
  }

  //función que sume los elementos del arreglo alumnos
  //variable local no lleva this
  sumarAlumnos(){
    let suma = 0;
    for(let i=0; i<this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //función que genere un número aleatorio (1-3)
  generarNumero(){
    return Math.floor(Math.random() * 3)+1;
  }

  //función que incrementa el contador 
  incrementarContador(){
    this.contador++;
  }

  //función que decrementa el contador
  decrementarCOntador(){
    this.contador--;
  }

  //función que cambia el valor de desactivarBoton
  cambiarValor(){
    this.desactivarBoton = false;
  }
}
