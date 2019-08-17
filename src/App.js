import React, { useState, useEffect } from 'react'

// I P F S
import useIpfsFactory from './hooks/use-ipfs-factory.js'
import useIpfs from './hooks/use-ipfs.js'

// C O M P O N E N T S
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => {
  const [layout, setLayout] = useState('home')

  const { ipfs, ipfsInitError } = useIpfsFactory({
    commands: ['id']
  })

  useEffect(() => {
    let path = window.location.pathname.substring(1)
    if (path) {
      setLayout('profile')
    } else {
      setLayout('home')
    }
  })

  let layoutOutput
  if (layout === 'profile') layoutOutput = <Profile />
  else layoutOutput = <Home />

  return <div className='App'>{layoutOutput}</div>
}

export default App
