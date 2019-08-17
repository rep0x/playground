import React, { useState } from 'react'

// C O M P O N E N T S
import CreateProfileForm from './CreateProfileForm'

const Home = () => {
  const [formVisible, setFormVisible] = useState(false)

  const toggleForm = () => {
    setFormVisible(!formVisible)
  }

  let formOutput
  if (formVisible) {
    formOutput = <CreateProfileForm toggleForm={toggleForm} />
  } else {
    formOutput = (
      <button
        className={`${formVisible ? 'hidden' : ''} btn btn-primary`}
        onClick={toggleForm}
      >
        Create your profile
      </button>
    )
  }

  return (
    <div className='profile'>
      <h1>{`${formVisible ? 'Create your profile' : 'Hello world.'}`}</h1>
      {formOutput}
    </div>
  )
}

export default Home
