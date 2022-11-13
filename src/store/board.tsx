import { createContext, useState } from "react";
import data from "../../data.json";
import { Board, Column, Task } from "../models";

type BoardType = {
  boardData: {};
  hasBoards: boolean;
  boardNames: string[];
  columnNames: string[];
  columns: Column[];
  setBoardData: (data: any) => void;
  selectedBoard: { board: string; idx: number };
  setSelectedBoard: (board: { board: string; idx: number }) => void;
  addColumn: (colName: string) => void;
  addBoard: (boardName: string) => void;
  selectedColumn: {
    column: string;
    idx: number;
    colAddButton: boolean;
  };
  setSelectedColumn: (column: {
    column: string;
    idx: number;
    colAddButton: boolean;
  }) => void;
  addTask: (task: Task) => void;
  moveTask: (taskId: string, fromColIndex: number, toColIndex: number) => void;
  updateTask: (task: { value: string; label: string }) => void;
  selectedTask: {
    task: Task;
    completedSubtasks: number;
    idx: number;
  };
  setSelectedTask: (task: {
    task: Task;
    completedSubtasks: number;
    idx: number;
  }) => void;
};

const BoardContext = createContext<BoardType>({
  boardData: {},
  hasBoards: false,
  boardNames: [],
  columnNames: [],
  columns: [],
  setBoardData: (data) => {},
  selectedBoard: { board: "", idx: -1 },
  setSelectedBoard: (board) => {},
  addColumn: (colName: string) => {},
  addBoard: (board) => {},
  selectedColumn: {
    column: "",
    idx: -1,
    colAddButton: false,
  },
  setSelectedColumn: (col) => {},
  addTask: (task: Task) => {},
  updateTask: (task) => {},
  updateTaskStatus: (task) => {},
  selectedTask: {
    task: new Task("", "", ""),
    completedSubtasks: -1,
    idx: -1,
  },
  moveTask: (taskId: string, fromColIndex: number, toColIndex: number) => {},
  setSelectedTask: () => {},
});

type PropsType = { children: React.ReactNode };

export const BoardProvider = ({ children }: PropsType) => {
  const [boardData, setBoardData] = useState(data);
  const [selectedBoard, setSelectedBoard] = useState({ board: "", idx: -1 });
  const [selectedColumn, setSelectedColumn] = useState({
    column: "",
    idx: -1,
    colAddButton: false,
  });

  const [selectedTask, setSelectedTask] = useState({
    task: new Task("", "", ""),
    completedSubtasks: -1,
    idx: -1,
  });

  const hasBoards = boardData.boards?.length > 0;

  const boardNames = boardData.boards?.map((board) => board.name);
  const columnNames = boardData?.boards[selectedBoard?.idx]?.columns.map(
    (column) => column.name
  );

  const columns: Column[] = boardData.boards[selectedBoard?.idx]?.columns;

  const addBoard = (boardName: string) => {
    const obj = boardData;
    obj.boards.push(new Board(boardName, []));
    setBoardData(obj);
    setSelectedBoard({ board: boardName, idx: obj.boards.length - 1 });
  };

  const addColumn = (colName: string) => {
    const obj = boardData;
    obj.boards[selectedBoard.idx]?.columns.push(new Column(colName, []));
    setBoardData(obj);
    setSelectedBoard({
      board: obj.boards[selectedBoard.idx].name,
      idx: obj.boards.length - 1,
    });
  };

  const addTask = (task: Task) => {
    const obj = boardData;
    obj.boards[selectedBoard.idx]?.columns[selectedColumn.idx]?.tasks.push(
      task
    );
    console.log(obj);
  };

  const moveTask = (
    taskId: string,
    fromColIndex: number,
    toColIndex: number
  ) => {
    if (fromColIndex === toColIndex) {
      return;
    }
    const obj = boardData;
    const board = obj.boards[selectedBoard.idx];
    const tasks = board.columns[fromColIndex].tasks;

    const draggedTask = tasks.find((task) => task.id === taskId)!;

    // Removing selected task from current column
    board.columns[fromColIndex].tasks = tasks.filter(
      (task) => task.id !== taskId
    );

    // Adding to updated task to a new task
    board.columns[toColIndex].tasks.push(draggedTask);

    setBoardData((prev) => ({ ...prev, ...obj }));
  };

  const updateTaskStatus = (updatedStatus: {
    value: string;
    label: string;
  }) => {
    const obj = boardData;
    const tasks =
      obj.boards[selectedBoard.idx]?.columns[selectedColumn.idx]?.tasks;

    if (updatedStatus.label === selectedColumn.column) {
      return;
    }
    const updatedTask = {
      ...tasks[selectedTask.idx],
      status: updatedStatus.label,
    };

    //  obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks[selectedTask.idx]

    // todo: Need to use id's instead of idx or name
    const index = obj.boards[selectedBoard.idx].columns.findIndex(
      (column) => column.name === updatedStatus.label
    );

    // Removing task from current column
    obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks =
      tasks.filter((task) => task.id !== updatedTask.id);
    console.log(obj);

    // Adding to updated task to a new task
    obj.boards[selectedBoard.idx].columns[index].tasks.push(updatedTask);
  };

  return (
    <BoardContext.Provider
      value={{
        boardData,
        hasBoards,
        boardNames,
        columnNames,
        columns,
        setBoardData,
        selectedBoard,
        setSelectedBoard,
        addColumn,
        addBoard,
        selectedColumn,
        setSelectedColumn,
        addTask,
        moveTask,
        updateTask,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
