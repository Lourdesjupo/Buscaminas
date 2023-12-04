import { useState } from 'react';
import initBoard from '../hooks/UseInitBoard';
import Box from './box';
import './board.css';

function Board({ level }) {
  const [board, setBoard] = useState(initBoard(level));
  const handleBoxClick = (button, row, column)=>{

  }
  console.log(board);
  return (
    <div className='board'>
      {board.finalBoard.map((el, idx) => {
        return (
          <div className='row' key={idx}>
            <Board row={el} onBoxClick = {(button, column)=>{handleBoxClick(button, idx, column)}}/>
          </div>
        );
      })}
    </div>
  );
}
export default Board;
