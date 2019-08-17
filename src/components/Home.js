import React, { useState } from 'react'

const Home = () => {
  const [formVisible, setFormVisible] = useState(false)

  const toggleForm = () => {
    setFormVisible(!formVisible)
  }

  let formOutput
  if (formVisible) {
    formOutput = (
      <form className='form'>
        <field className='form--field'>
          <label className='form--label'>Name</label>
          <input type='text' className='form--input' placeholder='Name' />
        </field>
        <field className='form--field'>
          <label className='form--label'>Motto</label>
          <input type='text' className='form--input' placeholder='Motto' />
        </field>
        <field className='form--field'>
          <label className='form--label'>Avatar URL</label>
          <input type='text' className='form--input' placeholder='Avatar URL' />
        </field>
        <div className='button-group'>
          <button className='btn btn-light' onClick={toggleForm}>
            Cancel
          </button>
          <button className='btn btn-primary'>Create profile</button>
        </div>
      </form>
    )
  }
  console.log(formVisible)
  return (
    <div className='profile'>
      <h1>{`${formVisible ? 'Create your profile' : 'Hello world.'}`}</h1>
      <button
        className={`${formVisible ? 'hidden' : ''} btn btn-primary`}
        onClick={toggleForm}
      >
        Create your profile
      </button>
      {formOutput}
    </div>
  )
}

export default Home
