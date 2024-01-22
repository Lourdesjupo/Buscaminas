import MasterMindAchivement from "./MasterMindAchivement";

//[{name: 'achievement name', count: number}]
function Achivements({ achivements }) {


  return (
    <div>
      {
        achivements.map((achivement, idx)=>{
          switch (achivement.name) {
            case 'master_mind': {
              return (
                <MasterMindAchivement key={idx} achivement={achivement}/>
              )
            }
          }
          return
        })
      }
    </div>
    
  );
}

export default Achivements;
