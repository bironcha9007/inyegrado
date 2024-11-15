import { missionVision } from '../constants'

const MissionVision = () => {
  return (
    <div className='content'>
     
      <div className="mission-vision">
        {missionVision.map(missVis => (
          <div className="missVis" key={missVis.id}>
          
            <h2>{missVis.title}</h2>
            <p>{missVis.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MissionVision