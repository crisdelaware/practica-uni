import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {


  constructor( private fb: FormBuilder, private studentService: StudentService ) { }

  @Input() miFormulario: FormGroup = this.fb.group({
    unidadAcademica: ['', Validators.required],
    carrera: ['', Validators.required],
    especialidad: ['', Validators.required],
    periodos: ['', Validators.required],
    cuatrimestre: ['', Validators.required],
    plandeEstudio: ['', Validators.required],
    turno: ['', Validators.required],
    nombre: ['', Validators.required]
  })
  
  guardar() {
    this.miFormulario.value.id = this.studentService.alumnos.length + 1;
    this.studentService.agregarAlumno(this.miFormulario.value);
    // this.studentService.agregarAlumno(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
