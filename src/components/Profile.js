import React, { useState, useEffect } from 'react'

// D A T A
import initialProfileData from '../data/profile_data.json'

// C O M P O N E N T S
import IpfsStatus from './IpfsStatus'
import EditProfile from './EditProfile'

const Profile = ({ ipfs }) => {
  const [profileData, setProfileData] = useState(initialProfileData)

  // Check route to render home or profile layout
  useEffect(() => {
    if (ipfs) {
      let path = window.location.pathname.substring(1)
      if (path) {
        //TODO Check if path is valid ipfs hash
        ipfs.get(path, function(err, files) {
          files.forEach(file => {
            let user = JSON.parse(file.content.toString('utf8'))
            setProfileData(user)
          })
        })
      }
    }
  }, [ipfs])

  return (
    <div>
      <IpfsStatus />
      <EditProfile profileData={profileData} />

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
    </div>
  )
}

export default Profile
