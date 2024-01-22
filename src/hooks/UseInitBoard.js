//Según selección de nivel;
// alto : 20x10  medio: 15x8 bajo: 10x5 (minas: 25)
//recibe un string

//checked: banderita
//active : casilla activa-visible (true)
function initBoard(typeB) {
  console.log('initBoard...');
  const typeBoard = [
    { type: 'hard', columns: 15, rows: 5, mine: 8 },
    { type: 'medium', columns: 10, rows: 5, mine: 4 },
    { type: 'easy', columns: 5, rows: 5, mine: 3 },
  ];

  const selectedBoard = typeBoard.find((el) => el.type === typeB);

  return newBoard(selectedBoard);
}
/**
 * Crea un nuevo tablero con la información de boardInfo.
 * @param {objeto} boardInfo
 * @returns {array de objeto} Estructura del tablero.
 * [[{bomb: boolean, numberOfAdyacentBombs: , Position: positionInArray , checked: boolean }],[]
 */

function newBoard(selectedBoard) {
  let finalBoard = [];
  //let mineCount = 0
  for (let row = 0; row < selectedBoard.rows; row++) {
    let currentRow = [];
    for (let column = 0; column < selectedBoard.columns; column++) {
      // const prob = Math.random()
      // let mine = false
      // if(prob < 0.5){
      //   mine = true
      //   mineCount++
      // }
      currentRow.push({
        bomb: false,
        position: { row, column },
        checked: false,
      });
    }
    finalBoard.push(currentRow);
  }

  //console.log('mineCount: ', mineCount)
  return generateMine(finalBoard, selectedBoard.mine, selectedBoard);
}

function generateMine(finalBoard, numberOfmine, selectedBoard) {
  console.log('generateMine', finalBoard, numberOfmine, selectedBoard);
  for (let mineCount = 0; mineCount < numberOfmine; ) {
    const row = Math.trunc(Math.random() * selectedBoard.rows);
    const col = Math.trunc(Math.random() * selectedBoard.columns);

    if (!finalBoard[row][col].bomb) {
      finalBoard[row][col].bomb = true;
      mineCount++;
    }

    // for (let row = 0; row < finalBoard.length; row++) {
    //   for (let column = 0; column < finalBoard[row].length; column++) {
    //     let mine = false;
    //     const prob = Math.random();
    //     if (
    //       prob < 0.5 &&
    //       !finalBoard[row][column].bomb
    //       &&
    //       mineCount <= numberOfmine
    //     ) {
    //       mine = true;
    //       mineCount++;
    //       finalBoard[row][column].bomb = mine;
    //     }
    //   }
    // }
  }

  return generateNumberOfAdyacentMine(finalBoard, selectedBoard);
}

function generateNumberOfAdyacentMine(finalBoard, selectedBoard) {
  for (let row = 0; row < finalBoard.length; row++) {
    for (let column = 0; column < finalBoard[row].length; column++) {
      let adj = 0;
      [
        { r: row, c: column + 1 },
        { r: row + 1, c: column + 1 },
        { r: row + 1, c: column },
        { r: row + 1, c: column - 1 },
        { r: row, c: column - 1 },
        { r: row - 1, c: column - 1 },
        { r: row - 1, c: column },
        { r: row - 1, c: column + 1 },
      ].forEach((coord) => {
        //comprueba si row y column están dentro de los rangos validos es decir que no se salgan por delante ni por detrás ni por arriba, ni por abajo y además si
        if (
          coord.r >= 0 &&
          coord.r < selectedBoard.rows &&
          coord.c >= 0 &&
          coord.c < selectedBoard.columns &&
          finalBoard[coord.r][coord.c].bomb
        ) {
          adj++;
        }
      });
      finalBoard[row][column].numberOfAdyacentBombs = adj;
    }
  }

  return { finalBoard, selectedBoard };
}

//
function suspiciousUpdate(board, box) {
  board.finalBoard[box.position.row][box.position.column].checked =
    !board.finalBoard[box.position.row][box.position.column].checked;
}
//
function discloseUpdate(board, box) {
  if (!board.finalBoard[box.position.row][box.position.column].bomb) {
    board.finalBoard[box.position.row][box.position.column].active = true;
  } else {
    board.gameStatus = 'lost';
    evaluateAchivement(board);
    board.finalBoard[box.position.row][box.position.column].active = true;
  }
}
function updateBoard(board, action, box) {
  if (board.gameStatus === 'lost' || board.gameStaus === 'win') return;
  if (action === 'disclose') {
    discloseUpdate(board, box);
    youWin(board, action, box);
  } else {
    suspiciousUpdate(board, box);
  }
}

function youWin(board) {
 if (board.gameStatus === 'lost') return;

 //if (board.finalBoard.every((row) => row.every((box) => box.active || box.bomb))) board.gameStatus = 'win';
  let win = true;
  board.finalBoard.forEach((row) => {
    return row.forEach((box) => {
      if (!box.active && !box.bomb) {  
        win = false;
      }
    });
  });
 if(win) board.gameStatus = 'win'
}
function evaluateAchivement(board) {
  if(board.finalBoard.every((row)=>row.every((box)=> !box.active) && !board.achievement)) board.achievement = { name: 'master_mind', count: 0 };

}
export { initBoard, updateBoard };



// funcion mejorada
// function generateNumberOfAdyacentMine(finalBoard, selectedBoard) {
//   for (let row = 0; row < finalBoard.length; row++) {
//     for (let column = 0; column < finalBoard[row].length; column++) {
//       finalBoard[row][column].numberOfAdyacentBombs = [
//         ({ r: row, c: column + 1 },
//         { r: row + 1, c: column + 1 },
//         { r: row + 1, c: column },
//         { r: row + 1, c: column - 1 },
//         { r: row, c: column - 1 },
//         { r: row - 1, c: column - 1 },
//         { r: row - 1, c: column },
//         { r: row - 1, c: column + 1 }),
//       ].reduce(
//         (adj, coord) =>
//           coord.r >= 0 &&
//           coord.r < selectedBoard.rows &&
//           coord.c >= 0 &&
//           coord.c < selectedBoard.columns &&
//           finalBoard[coord.r][coord.c].bomb
//             ? adj + 1
//             : adj,
//         0
//       );
//     }
//   }

//   return printBoard(finalBoardAll, selectedBoard);
// }
