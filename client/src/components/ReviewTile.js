import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ReviewTile = ({ title, rating, body, recipe, user, id, voteCount, reviewersVoted }) => {

  let reviewDescription
  if (body) {
    reviewDescription = <p>Review: {body}</p>
  }

  const [totalVotes, setTotalVotes] = useState(voteCount)
  const [userVoted, setUserVoted] = useState(false)
  
  const getVotes = async () => {
    try {
      const response = await fetch("/api/v1/votes")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setTotalVotes(totalVotes, responseBody.value)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getVotes()
  }, [])

  const addVote = async (value, userId) => {
    try {
      const response = await fetch(`/api/v1/votes/${id}/votes`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          value: value,
          reviewId: id,
          userId: userId
        })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          alert(body.message)  
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      const newTotalVotes = parseInt(totalVotes) + responseBody.votes.value
      setTotalVotes(newTotalVotes)
      setUserVoted(true)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

    const upClickHandler = async () => {
      await addVote(1, user.id)
    }
    const downClickHandler = async () => {
      await addVote(-1, user.id)
    }

    let upButton
    let downButton
    let signInMessage = "Sign in to vote on this pasta shape!"
    
    if (user) {
      signInMessage = null
      upButton = <button className="up-button" onClick={upClickHandler}>Up-Vote</button>
      downButton = <button className="down-button" onClick={downClickHandler}>Down-Vote</button>
    }

    let votedMessage
    let buttons
    if (user && reviewersVoted) {
      if ((reviewersVoted.includes(user.id)) || (userVoted === true)) {
        votedMessage = <p>You have voted on this review!</p>
      } else {
        buttons = <div>{upButton} {downButton}</div>
      }
    }

  return (
    <div className='review-tile'>
      <h5>{title}</h5>
      <p>Rating: {rating}</p>
      {signInMessage}
      {reviewDescription}
      <p>{recipe}</p>
      {votedMessage}
      {buttons}
      Vote Count: {totalVotes}
    </div>
  )
}

export default withRouter(ReviewTile)
