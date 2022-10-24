import { createContext, useCallback, useEffect, useState } from "react";
import data from "../../data.json";

type BoardType = {
  boardData: {};
  hasBoards: boolean;
  hasColumns: boolean;
  boardNames: string[];
  columnNames: string[];
  columns: [{}];
  setBoardData: (data: {}) => void;
  selectedBoard: {};
  setSelectedBoard: (board: {}) => void;
  addColumn: (col: {}) => void;
  addBoard: (board: {}) => void;
  selectedColumn: {};
  setSelectedColumn: (column: {}) => void;
  addTask: (task: {}) => void;
};

const BoardContext = createContext<BoardType>({
  boardData: {},
  hasBoards: false,
  hasColumns: false,
  boardNames: [],
  columnNames: [],
  columns: [{}],
  setBoardData: (data) => {},
  selectedBoard: {},
  setSelectedBoard: (board) => {},
  addColumn: (col) => {},
  addBoard: (board) => {},
  selectedColumn: {},
  setSelectedColumn: (col) => {},
  addTask: (task) => {},
});

type PropsType = { children: React.ReactNode };

export const BoardProvider = ({ children }: PropsType) => {
  const [boardData, setBoardData] = useState(data);
  const [selectedBoard, setSelectedBoard] = useState({ board: "", idx: -1 });
  const [selectedColumn, setSelectedColumn] = useState({
    column: "",
    idx: -1,
    colButton: false,
  });

  useEffect(() => {
    // Use react query to push changes to backend eventually
  }, [boardData]);

  const hasBoards = boardData.boards?.length > 0;
  const hasColumns = boardData?.boards[selectedBoard?.idx]?.columns.length > 0;

  const boardNames = boardData.boards?.map((board) => board.name);
  const columnNames = boardData?.boards[selectedBoard?.idx]?.columns.map(
    (column) => column.name
  );

  const columns = boardData.boards[selectedBoard?.idx]?.columns;

  const addBoard = (boardName: string) => {
    const arr = boardData;
    arr.boards.push({
      name: boardName,
      columns: [],
    });
    setBoardData(arr);
    setSelectedBoard({ board: boardName, idx: arr.boards.length - 1 });
  };

  const addColumn = (colName: string) => {
    const arr = boardData;
    arr.boards[selectedBoard.idx]?.columns.push({
      name: colName,
      tasks: [],
    });
    setBoardData(arr);
    setSelectedBoard({
      board: arr.boards[selectedBoard.idx].name,
      idx: arr.boards.length - 1,
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
    const arr = boardData;
    arr.boards[selectedBoard.idx]?.columns[selectedColumn.idx].tasks.push({
      title: title,
      description: description,
      status: status,
      subtasks: subtasks,
    });
    console.log(arr);
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
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
