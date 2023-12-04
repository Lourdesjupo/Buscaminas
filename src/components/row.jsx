
import Box from './box';

function Row({row,onBoxClick}){

row.map((box, idx) => {
  return <Box key= {idx} box={box} onBoxClick={(button)=>{onBoxClick(button, idx)}} />
})
}
export default Row
