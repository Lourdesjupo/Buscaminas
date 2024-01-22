/* eslint-disable react/prop-types */
import { useState } from 'react';
import './box.css';

function Box({ box, onBoxClick, gameStatus }) {
  //button 2 = click derecho button0 = click izquierdo

  
  function getBoxItem() {
    if((gameStatus === 'lost' || gameStatus === 'win')  && box.bomb) {
      return '☠️'
    }
    if(box.active && box.bomb && gameStatus) {
      return 
    }
    if(box.active && !box.bomb) {
      return  box.numberOfAdyacentBombs
    }
    if(box.checked && !box.active) {
     return '🚩'  
    }
  } 

  function handleClick(ev) {
    if (ev.button === 2) {
      onBoxClick('right',box)
    } else if (ev.button === 0) {
      onBoxClick('left',box)
    }
  }
  
    return (
      <div className= {box.active ? 'box blind': 'box'} 
        onContextMenu={(ev) => {
          ev.preventDefault();
          return handleClick(ev);
        }}
        onClick={(ev) => {
          handleClick(ev);
        }}
      >
        {getBoxItem()}
        

      </div>
    );

}
export default Box;



















// import { useState } from 'react';
// import './box.css';

// function Box({ row, board, onBoxClick }) {
//   //button 2 = click derecho button0 = click izquierdo
//   function handletype(ev, box) {
//     if (ev.button === 2) {
//       return;
//     } else if (ev.button === 0) {
//       if (box.bomb) {
//         console.log('Game Over');
//         // if(actBoard.position.row === board.position.row && actBoard.position.column === board.position.column) {
//         //   setActBoard([...actBoard, {checked : 'true'}])
//         // } 
//         return 
//       }
//       return;
//     }
//   }
//   return row.map((box, idx) => {
//     return (
//       <div className='box blind' key={idx}
//         onContextMenu={(ev) => {
//           ev.preventDefault();
//           return handletype(ev, box);
//         }}
//         onClick={(ev) => {
//           handletype(ev, box);
//         }}
//       > 
//       {(box.bomb ? '☠️' : box.numberOfAdyacentBombs)}
//       {console.log(box)}
//       {}  
//       </div>
//     );
//   });
// }
// export default Box;
