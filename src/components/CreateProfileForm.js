import React, { useState } from 'react'

const CreateProfileForm = ({ toggleForm }) => {
  const intitalFormData = {
    name: '',
    motto: '',
    avatarUrl: ''
  }
  const [formData, setFormData] = useState(intitalFormData)

  const formSubmit = e => {
    // Todo - Sent data to IPFS
    // Todo - Show pending -> success alert
    // Todo - Render profile layout with submitted form data
    console.log(formData)
    e.preventDefault()
  }
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <form className='form'>
      <div className='form--field'>
        <label className='form--label'>Name</label>
        <input
          type='text'
          name='name'
          className='form--input'
          placeholder='Name'
          autoFocus={true}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className='form--field'>
        <label className='form--label'>Motto</label>
        <input
          type='text'
          name='motto'
          className='form--input'
          placeholder='Motto'
          value={formData.motto}
          onChange={handleChange}
        />
      </div>
      <div className='form--field'>
        <label className='form--label'>Avatar URL</label>
        <input
          type='text'
          name='avatarUrl'
          className='form--input'
          placeholder='Avatar URL'
          value={formData.avatarUrl}
          onChange={handleChange}
        />
      </div>
      <div className='button-group'>
        <div className='btn btn-white' onClick={toggleForm}>
          Cancel
        </div>
        <button type='submit' className='btn btn-primary' onClick={formSubmit}>
          Create profile
        </button>
      </div>
    </form>
  )
}

export default CreateProfileForm
