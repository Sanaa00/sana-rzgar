import React from 'react'
import "./skill.scss"
function Skill() {
     const skills=[1,2,3,4,5,6,7,8,9,10]
  return (
       <div className='skill-Container'>
            <p>Skill</p>
            {
                 skills.map((skil)=>{
                 return<div  className='skill' key={skil}>
               {skil}
                 </div>
            })}
    </div>
  )
}

export default Skill
