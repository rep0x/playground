import React, { useState } from 'react'
import './App.scss'
import initialProfileData from './profile_data.json'
import useIpfsFactory from './hooks/use-ipfs-factory.js'
import useIpfs from './hooks/use-ipfs.js'

const App = () => {
  const {
    ipfs,
    ipfsInitError
  } = useIpfsFactory({
    commands: ['id']
  })
  const id = useIpfs(ipfs, 'id')
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
        {id && <IpfsId {...id} />}
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


const Title = ({ children }) => {
  return (
    <h2 className='f5 ma0 pb2 tracked aqua fw4 montserrat'>{children}</h2>
  )
}

const IpfsId = (props) => {
  if (!props) return null
  return (
    <section className='bg-snow mw7 center mt5'>
      <h1 className='f3 fw4 ma0 pv3 aqua montserrat tc'>Connected to IPFS</h1>
      <div className='pa4'>
        {['id', 'agentVersion'].map((key) => (
          <div className='mb4' key={key}>
            <Title>{key}</Title>
            <div className='bg-white pa2 br2 truncate monospace'>{props[key]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App
