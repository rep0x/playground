import React, { useState } from 'react'
import './App.scss'
import initialProfileData from './profile_data.json'

const App = () => {
  const [profileData, setProfileData] = useState(initialProfileData)
  const [isEditable, setIsEditable] = useState(false)
  const [name, setName] = useState(profileData.name)

  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }

  const changeName = e => {
    setName(e.target.value)
  }

  const onSubmit = () => {}

  let output
  if (isEditable) {
    output = (
      <form>
        <input type='text' value={name} onChange={changeName} />
        <button className='btn btn-primary' onClick={onSubmit}>
          Submit
        </button>
      </form>
    )
  }

  return (
    <div className='App'>
      <div className='profile'>
        <img
          className='profile--avatar'
          src={profileData.avatar_url}
          alt={`${profileData.name}s profile avatar`}
        />
        <h1 className='profile--name'>{profileData.name}</h1>
        <h3 className='profile--motto'>{profileData.motto}</h3>
        {/* <Skills skills={profileData.skills} /> */}
      </div>
      {output}
      <button className='edit btn btn-dark' onClick={toggleEditable}>
        Edit
      </button>
    </div>
  )
}

export default App
