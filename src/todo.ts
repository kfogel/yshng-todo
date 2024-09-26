import { State } from ".";

export class ToDo {
  title: string;
  dueDate?: Date;
  priority?: number; // from 0 to 4, 4 being most important
  notes: string;
  //checklist?: string[];
  status: number;
  timescale: number; 
  created: Date;
  projectID: string; 

  constructor(title: string,dueDate: Date | undefined,priority: number,notes: string, timescale: number, project: string) {
    this.title = title,
    this.dueDate = dueDate,
    this.priority = priority,
    this.notes = notes,
    this.timescale = timescale,
    this.status = 0,
    this.created = new Date();
    this.projectID = project;
  }

  toString(): string {
    return this.title;
  }

  addToDo(state: State): ToDo[] {
    return state.todos.concat(this);
  } 

  update<K extends keyof ToDo, V extends ToDo[K]>(key: K,value: V): ToDo {
    return {...this,[key]: value}
  }
}

