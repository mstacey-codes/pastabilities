import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const Vote = props => {
  
  const user = props.user
  const reviewId = props.reviewId
  const [voteCount, setVoteCount] = useState({
    value: 0
  })

  const getVotes = async () => {
    try {
      const response = await fetch("/api/v1/votes", {

        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ reviewId }) 
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setVoteCount(body.totalCount)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getVotes()
  }, [])

  const addVote = async (value) => {
    try {
      const response = await fetch("/api/v1/votes", { // ?????? maybe separate router?
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({
          value: value,
          reviewId: reviewId
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
      const body = await response.json()
      setVoteCount(body.totalCount)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  const upClickHandler = async () => {
    await addVote(1)
  }

  const downClickHandler = async () => {
    await addVote(-1)
  }

  let upButton
  let downButton
  let signInMessage = <p>Sign in to vote on this pasta shape!</p>

  if (user) {
    signInMessage = null
    upButton = <button className="up-button" onClick={upClickHandler}>Up-Vote</button>
    downButton = <button className="down-button" onClick={downClickHandler}>Down-Vote</button>
  }

  return (
    <div>
      {signInMessage}
      {upButton}
      <div>Count: {voteCount}</div>
      {downButton}
    </div>
  )
}

export default withRouter(Vote)
