import React, { useState } from 'react'
import { css } from '@emotion/core'
// First way to import
import { DotLoader } from 'react-spinners'

// I P F S
import useIpfsFactory from '../hooks/use-ipfs-factory.js'
import useIpfs from '../hooks/use-ipfs.js'

const IpfsStatus = () => {
  const [ipfsStatus, setIpfsStatus] = useState('pending')
  const [loading, setLoading] = useState(true)
  const { ipfs, ipfsInitError } = useIpfsFactory({
    commands: ['id']
  })

  const id = useIpfs(ipfs, 'id')
  const override = css`
    margin-right: 15px;
  `
  return (
    <div className='alert'>
      <DotLoader
        css={override}
        sizeUnit={'px'}
        size={30}
        color={'var(--primary)'}
        loading={loading}
      />
      <span className='alert--msg'>Connecting to IPFS</span>
      {/* {id && <IpfsId {...id} />} */}
    </div>
  )
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
