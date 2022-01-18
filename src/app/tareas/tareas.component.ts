import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo = ['Enviar correos', 'Actualizar página'];
  inprogress = ['Crear invitación a EDB', 'Firmar informes'];
  done = ['Checar correo'];
  tarea = "";
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  addToDo(){
    this.todo.push(this.tarea);
    this.tarea='';
  }

}
