import { createContext, useCallback, useEffect, useState } from "react";
import data from "../../data.json"

type BoardType = {
  board: {};
  hasBoards: boolean;
  setBoard: () => void;
};

const BoardContext = createContext<BoardType>({
  board: {},
  hasBoards: false,
  setBoard: () => {},
});

type PropsType = { children: React.ReactNode };

export const BoardProvider = ({ children }: PropsType) => {
  const [board, setBoard] = useState(data);
  
  const hasBoards = board.boards.length > 0

  useEffect(() => {
    // Use react query to push changes to backend eventually
  }, [board])

  return (
    <BoardContext.Provider
      value={{
        board,
        hasBoards,
        setBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
