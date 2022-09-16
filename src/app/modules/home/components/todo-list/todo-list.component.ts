import { Component, DoCheck, OnInit } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("taskList") || '[]');  

  constructor() { }

  ngOnInit(): void {
  }
  
  ngDoCheck(): void {
    this.setLocalStorage();
  }
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last)=> Number(first.checked)-Number(last.checked));
      localStorage.setItem("taskList", JSON.stringify(this.taskList));
    }
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

  public validationInput(event: string, index: number){
      if(!event.length){
        const confirm = window.confirm("Remover linha apagada ?");
        if(confirm)
          this.deleteItemTaskList(index);
      }
  
  }
}
