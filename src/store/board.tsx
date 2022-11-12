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
  selectedTask: {
    task: new Task("", "", ""),
    completedSubtasks: -1,
    idx: -1,
  },
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

  console.log("test1234", boardData.boards[selectedBoard?.idx]?.columns);

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
    obj.boards[selectedBoard.idx]?.columns[selectedColumn.idx].tasks.push(task);
    console.log(obj);
  };

  const updateTask = (updatedStatus: { value: string; label: string }) => {
    console.log("testes4321", updatedStatus);
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

    obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks =
      tasks.filter((task) => task.id !== updatedTask.id);
    console.log(obj);

    // Adding to updated task to a new task
    obj.boards[selectedBoard.idx].columns[index].tasks.push(updatedTask);

    // Removing task from current column
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
