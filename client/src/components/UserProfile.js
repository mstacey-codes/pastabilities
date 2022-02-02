import React from "react"

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>You're signed in as:</h1>
      <h2> {user.email} </h2>
    </div>
  )
}

export default UserProfile