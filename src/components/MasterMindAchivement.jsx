//{name: 'achievement name', count: number}
function MasterMindAchivement({ achivement }) {

  return (
    <>
      <div className='achivement'>
        <img className='master_mind_stamp' src='./sello.png' alt='' />
        <div className='master_mind'>
          <img className='master_mind_trophy' src='./png_trophy.png' alt='' />
          <p className='master_mind_text'>
            You are a Master Mind x {achivement.count}
          </p>
        </div>
      </div>
    </>
  );
}

export default MasterMindAchivement;