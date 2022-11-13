import { createContext, useState } from "react";
import data from "../../data.json";

type BoardType = {
  boardData: {};
  hasBoards: boolean;
  hasColumns: boolean;
  boardNames: string[];
  columnNames: string[];
  columns: any; // todo: @andrej come back and fix this typechecking
  // [
  //   {
  //     name: string;
  //     tasks: [
  //       {
  //         title: string;
  //         status: string;
  //         description: string;
  //         subtasks: [{ title: string; isCompleted: boolean }];
  //       }
  //     ];
  //   }
  // ];
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
  addTask: (task: {
    description: string;
    status: string;
    subtasks: [];
    title: string;
  }) => void;
  updateTask: (task: {
    description: string;
    status: string;
    subtasks: [];
    title: string;
  }) => void;
  updateTaskStatus: (task: { value: string; label: string }) => void;
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
  columns: [
    {
      name: "",
      tasks: [
        {
          title: "",
          status: "",
          description: "",
          subtasks: [{ title: "", isCompleted: false }],
        },
      ],
    },
  ],
  setBoardData: (data) => {},
  selectedBoard: { board: "", idx: -1 },
  setSelectedBoard: (board) => {},
  addColumn: (colName) => {},
  addBoard: (board) => {},
  selectedColumn: {
    column: "",
    idx: -1,
    colAddButton: false,
  },
  setSelectedColumn: (col) => {},
  addTask: (task) => {},
  updateTask: (task) => {},
  updateTaskStatus: (task) => {},
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
  };

  const updateTaskStatus = (updatedStatus: {
    value: string;
    label: string;
  }) => {
    const obj = boardData;
    const task =
      obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks[
        selectedTask.idx
      ];
    // ? need to somehow get this status switch to move it into different column object as well as changing status too
    obj.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks[
      selectedTask.idx
    ] = {
      ...task,
      status: updatedStatus,
    };
  };

  const updateTask = ({ description, status, subtasks, title }: Task) => {
    const obj = boardData;
    // ? need to somehow get this status switch to move it into different column object as well as changing status too
    boardData.boards[selectedBoard.idx].columns[selectedColumn.idx].tasks[
      selectedTask.idx
    ] = {
      description,
      status,
      subtasks,
      title,
    };
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
        updateTaskStatus,
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
