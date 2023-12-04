import './box.css';

function Box({ box, onBoxClick }) {
  //button 2 = click derecho button0 = click izquierdo
    

  function handleClick(ev) {
    if (ev.button === 2) {
      onBoxClick('right')
    } else if (ev.button === 0) {
      onBoxClick('left')
    }
  }
  
    return (
      <div className='box blind' 
        onContextMenu={(ev) => {
          ev.preventDefault();
          return handleClick(ev);
        }}
        onClick={(ev) => {
          handleClick(ev);
        }}
      ></div>
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
