import React, { useState } from 'react'

const EditProfileButton = ({ profileData }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [name, setName] = useState(profileData.name)
  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }
  let output
  if (isEditable) {
    output = (
      <form>
        {/* <input type='text' value={name} onChange={changeName} />
        <button className='btn btn-primary' onClick={onSubmit}>
          Submit
        </button> */}
      </form>
    )
  }

  const changeName = e => {
    setName(e.target.value)
  }

  const onSubmit = e => {
    // Todo submit data here
    e.preventDefault()
    return
  }

  return (
    <button className='edit btn btn-white' onClick={toggleEditable}>
      Edit
      {output}
    </button>
  )
}

export default EditProfileButton
