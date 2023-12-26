import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const params = useParams();
  return (
    <div>
      <h1>profile</h1>
      <p>{params.id}</p>
    </div>
  )
}

export default Profile
