export type BoardSegment = { letter: string, color: string }
export type BoardType = BoardSegment[][]
export interface BoardProps {
  board: BoardType
}

const Board = ({ board }: BoardProps) => {
  // thing1
  //thing2 
  return (<p>board</p>)
}

export default Board