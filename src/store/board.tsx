import { createContext, useState } from "react";
import data from "../../data.json";

type BoardType = {
  boardData: {};
  hasBoards: boolean;
  hasColumns: boolean;
  boardNames: string[];
  columnNames: string[];
  columns: [{}];
  setBoardData: (data: {}) => void;
  selectedBoard: { board: string; idx: number };
  setSelectedBoard: (board: {}) => void;
  addColumn: (col: {}) => void;
  addBoard: (board: {}) => void;
  selectedColumn: {
    column: string;
    idx: number;
    colAddButton: false;
  };
  setSelectedColumn: (column: {}) => void;
  addTask: (task: {}) => void;
  updateTask: (task: {}) => void;
  selectedTask: {
    task: {};
    completedSubtasks: number;
    idx: number;
  };
  setSelectedTask: (task: {
    task: {};
    completedSubtasks: number;
    idx: number;
  }) => void;
};

const BoardContext = createContext<BoardType>({
  boardData: {},
  hasBoards: false,
  hasColumns: false,
  boardNames: [],
  columnNames: [],
  columns: [{}],
  setBoardData: (data) => {},
  selectedBoard: { board: "", idx: -1 },
  setSelectedBoard: (board) => {},
  addColumn: (col) => {},
  addBoard: (board) => {},
  selectedColumn: {
    column: "",
    idx: -1,
    colAddButton: false,
  },
  setSelectedColumn: (col) => {},
  addTask: (task) => {},
  updateTask: (task) => {},
  selectedTask: {
    task: {},
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
    task: {},
    completedSubtasks: -1,
    idx: -1,
  });

  const hasBoards = boardData.boards?.length > 0;
  const hasColumns = boardData?.boards[selectedBoard?.idx]?.columns.length > 0;

  const boardNames = boardData.boards?.map((board) => board.name);
  const columnNames = boardData?.boards[selectedBoard?.idx]?.columns.map(
    (column) => column.name
  );

  const columns = boardData.boards[selectedBoard?.idx]?.columns;

  const addBoard = (boardName: string) => {
    const obj = boardData;
    obj.boards.push({
      name: boardName,
      columns: [],
    });
    setBoardData(obj);
    setSelectedBoard({ board: boardName, idx: obj.boards.length - 1 });
  };

  const addColumn = (colName: string) => {
    const obj = boardData;
    obj.boards[selectedBoard.idx]?.columns.push({
      name: colName,
      tasks: [],
    });
    setBoardData(obj);
    setSelectedBoard({
      board: obj.boards[selectedBoard.idx].name,
      idx: obj.boards.length - 1,
    });
  };

  // ? not sure if below code is really needed at the moment, maybe we can implement add task in a different way
  type Task = {
    description: string;
    status: string;
    subtasks: [];
    title: string;
  };

  const addTask = ({ description, status, subtasks, title }: Task) => {
    const obj = boardData;
    obj.boards[selectedBoard.idx]?.columns[selectedColumn.idx].tasks.push({
      title: title,
      description: description,
      status: status,
      subtasks: subtasks,
    });
    console.log(obj);
  };

  const updateTask = (updatedStatus) => {
    const obj = boardData;
    // ? need to somehow get this status switch to move it into different column object as well as changing status too
    obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks[
      selectedTask.idx
    ] = {
      ...obj.boards[selectedBoard.idx]?.columns[selectedColumn.idx]?.tasks[
        selectedTask.idx
      ],
      status: updatedStatus.label,
    };
    console.log(obj);
  };

  return (
    <BoardContext.Provider
      value={{
        boardData,
        hasBoards,
        hasColumns,
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
