/* eslint-disable react/prop-types */
import { useState } from 'react';
import {initBoard, updateBoard} from '../hooks/UseInitBoard';
import './board.css';
import Row from './row';

function Board({ level, onLost, onWin, onAchievements}) {
  //console.log('LEVEL', level)
  const [board, setBoard] = useState('');
  

  if(!board){
    setBoard(initBoard(level))
    return
  }
  const handleBoxClick = (button, box)=>{
    //console.log('PREhandleBoxClick',button, box, board)
    updateBoard (board,button === 'left' ? 'disclose' : 'suspicious' , box)
   // console.log('POSThandleBoxClick',button, box, board)
    if(board.gameStatus === 'lost') {
      onLost()
      onAchievements(board.achievement)
    }    
    if(board.gameStatus === 'win') onWin()
    
    setBoard({...board})
  }
  // console.log(board);
  return (
    <div className='board'>
      {board.finalBoard.map((el, idx) => {
        return (
            <Row key={idx} row={el} onBoxClick = {handleBoxClick} gameStatus = {board.gameStatus}/>
        );
      })}
    </div>
  );
}
export default Board;
