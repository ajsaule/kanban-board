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
  setSelectedBoard: (board: {}) => void;
  selectedBoard: {};
};

const BoardContext = createContext<BoardType>({
  boardData: {},
  hasBoards: false,
  hasColumns: false,
  boardNames: [],
  columnNames: [],
  columns: [{}],
  setBoardData: (data) => {},
  setSelectedBoard: (board) => {},
  selectedBoard: {},
});

type PropsType = { children: React.ReactNode };

export const BoardProvider = ({ children }: PropsType) => {
  const [boardData, setBoardData] = useState(data);
  const [selectedBoard, setSelectedBoard] = useState({ board: "", idx: -1 });

  useEffect(() => {
    // Use react query to push changes to backend eventually
  }, [boardData]);

  const hasBoards = boardData.boards.length > 0;
  const hasColumns = boardData.boards[selectedBoard.idx]?.columns.length > 0;

  const boardNames = boardData.boards.map((board) => board.name);
  const columnNames = boardData.boards[selectedBoard.idx]?.columns.map(
    (column) => column.name
  );

  const columns = boardData.boards[selectedBoard.idx]?.columns;

  return (
    <BoardContext.Provider
      value={{
        boardData,
        hasBoards,
        hasColumns,
        boardNames,
        columnNames,
        columns,
        selectedBoard,
        setBoardData,
        setSelectedBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;