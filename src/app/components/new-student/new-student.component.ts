import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Alumno } from '../../interface/alumno.interface';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent  {

  miFormulario: FormGroup = this.fb.group({
    unidadAcademica: ['', Validators.required],
    carrera: ['', Validators.required],
    especialidad: ['', Validators.required],
    periodos: ['', Validators.required],
    cuatrimestre: ['', Validators.required],
    plandeEstudio: ['', Validators.required],
    turno: ['', Validators.required],
    nombre: ['', Validators.required]
  })

  alumnos: Alumno[] = [];

  constructor( private fb: FormBuilder, private studentService: StudentService ) { }

  guardar() {
    this.miFormulario.value.id = this.studentService.alumnos.length + 1;
    this.studentService.agregarAlumno(this.miFormulario.value);
    // this.studentService.agregarAlumno(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
