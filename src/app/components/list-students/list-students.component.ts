import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Alumno } from '../../interface/alumno.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor( private studentService: StudentService, private fb: FormBuilder ) { }

  get Alumno(): Alumno[] {
    return this.studentService.alumnos;
  }

  



  editar(registro: any) {
    // this.miFormulario = registro
    // console.log(registro)
  }

  ngOnInit(): void {
  }

}
