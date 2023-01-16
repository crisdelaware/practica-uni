import { Injectable } from '@angular/core';
import { Alumno } from '../interface/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private _alumnos: Alumno[] = [
    { id: 1, nombre: 'Cristian Diaz', carrera: 'Ing. en Desarrollo y Gestion de Software' },
    { id: 2, nombre: 'Oscar Sanchez', carrera: 'Ing. Mecatronica' },
    { id: 3, nombre: 'Romelu Lukaku', carrera: 'TSU. Paramedico' },
  ]

  get alumnos() {
    return [...this._alumnos];
  }

  constructor() { }

  agregarAlumno(alumno: Alumno) {
    this._alumnos.push(alumno);
  }
}
