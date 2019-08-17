import React from 'react'

const Skills = ({ skills }) => {
  console.log(skills)
  const skillsOutput = skills.map(skill => (
    <div className='skill'>
      <img src={skill.icon_url} alt={skill.name} />
      <h6>{skill.name}</h6>
    </div>
  ))
  return <div className='skills'>{skillsOutput}</div>
}

export default Skills
