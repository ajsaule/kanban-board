import { getId } from "../utils/helper";

export class Subtask {
  readonly id: string = getId();
  title: string;
  isCompleted: boolean;

  constructor(title = "", isCompleted = false) {
    this.title = title;
    this.isCompleted = isCompleted;
  }
}

export class Task {
  readonly id: string = getId();
  subtasks: Subtask[] = [];

  constructor(
    public title: string,
    public description: string,
    public status: string,
    subtasks: Subtask[] = []
  ) {
    this.subtasks = subtasks;
  }
}

export class Column {
  readonly id: string = getId();
  constructor(public name: string, public tasks: Task[]) {}
}

export class Board {
  readonly id: string = getId();
  constructor(public name: string, public columns: Column[]) {}
}
