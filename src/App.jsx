import './App.css';
import Achivements from './components/Achivements.jsx';
import Board from './components/board.jsx';
import { useTimer } from './hooks/timer.js';
import { useState } from 'react';

function App() {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [accepted, setAccepted] = useState('');
  const [gameStart, setGameStart] = useState(false);
  const [time, startTimer, stopTimer] = useTimer();
  const [lost, setLost] = useState(false);
  const [win, setWin] = useState(false);
  const [achievements, setAchievements] = useState([]);
  //[{name: 'master_mind', count: 0 }]
  // console.log(achievements)
  const handleNewGameClick = () => {
    setGameStart(false);
    setAccepted('');
    setLost(false);
  };

  const handleClick = () => {
    setGameStart(true);
    startTimer();
    setAccepted(selectedLevel);
  };
  const handleLost = () => {
    console.log('handlelost')
    stopTimer();
    setLost(true);
  };
  // const showMaster = () => { 
  //   console.log('achievement',achievements)
  //   const achievement = achievements.find((el)=> el.name === 'master_mind')
  //   if(achievement){
  //     return (<>
  //     <div className="achivement">
  //       <img className='master_mind_stamp'src="./sello.png" alt=""/>
  //       <div className='master_mind'>
  //         <img className='master_mind_trophy'src="./png_trophy.png" alt="" />
  //         <p className='master_mind_text'>You are a Master Mind x {achievement.count}</p>
  //       </div>
  //     </div>
  //      </>
  //     );      
  //   }


  // };

  const handleWin = () => {
    stopTimer();
    setWin(true);
  };

  //[{name: 'master_mind', count: 0 }]
  const handleAchievements = (ach) => {
    const findAch = achievements.find((el)=> el.name === 'master_mind')

    if(!findAch) {
      setAchievements([
        ...achievements,{
        name: ach.name,
        count: 1,
      }]);
    } else {
      findAch.count++
      setAchievements([...achievements])
    }
    

  };
  // useEffect(()=>{

  //   if(gameStart) {
  //     setInterval(()=>{
  //       setNum((actNumber)=>actNumber + 1)
  //     }, 1000)
  //   }
  // }, [gameStart])

  return (
    <>
      <header>
        <h1 className='title'>Hell minesweeper</h1>
        <div className={gameStart ? 'hide' : 'level'}>
          <label className='label_level'>Choose level:</label>
          <select
            className='selection_level'
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value=''>select</option>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hardcore</option>
          </select>
          <button
            className='button_play'
            onClick={() => {
              handleClick();
            }}
          >
            {' '}
            {`Let's Go!`}
          </button>
           {/* {lost && showMaster()} */}
           
        </div>
      </header>

      <aside> {lost && <Achivements achivements={achievements}/>}</aside>
      <main className='game_board'>
        {lost && (
          <>
     
            <div className='lost'>YOU LOST</div>
            <img
              className='update'
              src='./update.svg'
              onClick={handleNewGameClick}
            ></img>
          </>
        )}
        {win && (
          <>
            <div className='lost'>🎉YOU WIN 🎉</div>
            <img
              className='update'
              src='./update.svg'
              onClick={handleNewGameClick}
            ></img>
          </>
        )}
        <div className={gameStart ? 'time' : 'hide'}>
          {gameStart ? time : ''}
        </div>
        {accepted === '' ? (
          ''
        ) : (
          <Board
            level={accepted}
            onLost={handleLost}
            onWin={handleWin}
            onAchievements={handleAchievements}
          />
        )}
      </main>
    </>
  );
}

export default App;
