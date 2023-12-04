//Según selección de nivel;
// alto : 20x10  medio: 15x8 bajo: 10x5 (minas: 25)
//recibe un string
function initBoard(typeB) {
  const typeBoard = [
    { type: 'hard', columns: 15, rows: 5, mine: 30 },
    { type: 'medium', columns: 10, rows: 5, mine: 20 },
    { type: 'easy', columns: 5, rows: 5, mine: 10 },
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
  let mineCount = 1;
  for (let x = 0; mineCount < numberOfmine; x++) {
    for (let y = 0; y < finalBoard[x].length; y++) {
      let mine = false;
      const prob = Math.random();
      if (prob < 0.5) {
        mine = true;
        mineCount++;
        finalBoard[x][y].bomb = mine;
      }
    }
  }

  return generateNumberOfAdyacentMine(finalBoard, selectedBoard);
}

function generateNumberOfAdyacentMine(finalBoard, selectedBoard) {
  for (let row = 0; row < finalBoard.length; row++) {
    for (let column = 0; column < finalBoard[row].length; column++) {
      let adj = 0;
      [
        ({ r: row, c: column + 1 },
        { r: row + 1, c: column + 1 },
        { r: row + 1, c: column },
        { r: row + 1, c: column - 1 },
        { r: row, c: column - 1 },
        { r: row - 1, c: column - 1 },
        { r: row - 1, c: column },
        { r: row - 1, c: column + 1 }),
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



export default initBoard;

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
