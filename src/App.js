import React, { useState } from 'react'
import './App.css'
import initialProfileData from './profile_data.json'

const App = () => {
  const [profileData, setProfileData] = useState(initialProfileData)
  console.log(profileData)
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
      </div>
    </div>
  )
}

export default App
