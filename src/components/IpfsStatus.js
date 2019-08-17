import React from 'react'

// I P F S
import useIpfsFactory from '../hooks/use-ipfs-factory.js'
import useIpfs from '../hooks/use-ipfs.js'

const IpfsStatus = () => {
  const { ipfs, ipfsInitError } = useIpfsFactory({
    commands: ['id']
  })
  const id = useIpfs(ipfs, 'id')
  return <div>{id && <IpfsId {...id} />}</div>
}

const Title = ({ children }) => {
  return <h2 className='f5 ma0 pb2 tracked aqua fw4 montserrat'>{children}</h2>
}

const IpfsId = props => {
  if (!props) return null
  return (
    <section className='bg-snow mw7 center mt5'>
      <h1 className='f3 fw4 ma0 pv3 aqua montserrat tc'>Connected to IPFS</h1>
      <div className='pa4'>
        {['id', 'agentVersion'].map(key => (
          <div className='mb4' key={key}>
            <Title>{key}</Title>
            <div className='bg-white pa2 br2 truncate monospace'>
              {props[key]}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IpfsStatus
