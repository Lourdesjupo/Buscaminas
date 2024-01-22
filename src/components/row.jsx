/* eslint-disable react/prop-types */
import Box from './box';

function Row({ row, onBoxClick, gameStatus }) {
  return (
    <div className='row'>
      {
        row.map((box, idx) => {
          return <Box key={idx} box={box} onBoxClick={onBoxClick} gameStatus = {gameStatus}/>;
        })
      }
    </div>
  );
}
export default Row;
