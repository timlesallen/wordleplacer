import styled from "styled-components";
export type BoardSegment = { letter: string, color: string }
export type BoardType = BoardSegment[][]
export interface BoardProps {
  board: BoardType
  // gameBoard: Function
}

export interface BoardSegmentProps {
  letter: string
  color: string
}


const Main = styled.main`
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;

  border-bottom: 1px solid #3a3a3c;

  font-weight: 700;
  font-size: 3.6rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const Board = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const BoardSegmentContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;

  height: 420px;
  width: 350px;
`;

const BoardSegmentRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

const BoardSegment = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #3a3a3c;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 3.2rem;
  text-transform: uppercase;
`;

function gameBoard() {
  return (
    <Main>
      <Header>WORDLEPLACER</Header>
      <Board>
        <BoardSegmentContainer>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <BoardSegmentRow key={i}>
              {[0, 1, 2, 3, 4].map((i) => (
                <BoardSegment key={i}></BoardSegment>
              ))}
            </BoardSegmentRow>
          ))}
        </BoardSegmentContainer>
      </Board>
    </Main>
  );
}

export default gameBoard


// const Board = ({ board }: BoardProps) => {
//   // thing1
//   //thing2 
//   return (<p>board</p>)
// }

// export default Board