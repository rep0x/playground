import React, { useState, useEffect } from 'react'

// D A T A
import initialProfileData from './data/profile_data.json'

// I P F S
import useIpfsFactory from './hooks/use-ipfs-factory.js'
import useIpfs from './hooks/use-ipfs.js'
import Ipfs from 'ipfs'

// C O M P O N E N T S
import Skills from './components/Skills'
import IpfsStatus from './components/IpfsStatus'

const App = () => {
  const { ipfs, ipfsInitError } = useIpfsFactory({
    commands: ['id']
  })
  const id = useIpfs(ipfs, 'id')
  const [profileData, setProfileData] = useState(initialProfileData)

  const [isEditable, setIsEditable] = useState(false)

  const [name, setName] = useState(profileData.name)

  useEffect(() => {
    console.log("ipfs", ipfs)

    if (ipfs) {
      console.log(window.location.pathname)

      let path = window.location.pathname.substring(1)
      if (path) {
        //TODO Check if path is valid ipfs hash
        console.log("oben", path)
        ipfs.get(path, function (err, files) {
          files.forEach((file) => {
            console.log(file.path)
            console.log(file.content.toString('utf8'))
          })
        })
      }

    }
  }, [ipfs])



  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }

  const changeName = e => {
    setName(e.target.value)
  }

  const onSubmit = e => {
    console.log('ipfs', ipfs)
    e.preventDefault()
    return
    console.log('name', name)

    const data = {
      name: name,
      id: id
    }
    const content = Ipfs.Buffer.from(JSON.stringify(data))

    ipfs.add(content).then(function(results) {
      const hash = results[0].hash // "Qm...WW"
      console.log('hash', hash)
    })
  }

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
      <IpfsStatus />
      <div className='profile'>
        <img
          className='profile--avatar'
          src={profileData.avatar_url}
          alt={`${profileData.name}s profile avatar`}
        />
        <h1 className='profile--name'>{profileData.name}</h1>
        <h3 className='profile--motto'>{profileData.motto}</h3>
        <Skills skills={profileData.skills} />
      </div>
      {output}
      <button className='edit btn btn-dark' onClick={toggleEditable}>
        Edit
      </button>
    </div>
  )
}

export default App
