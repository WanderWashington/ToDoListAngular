import { Component, OnInit } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  //Remove posição da lista.
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirmMessage = window.confirm("Remover todas as tarefas ?")
    if(confirmMessage)
      this.taskList = [];
  }

  public setEmitTaskList(event:string){
    this.taskList.push({ task: event, checked : false});
  }
}
