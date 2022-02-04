import React from 'react'

const ReviewTile = ({ title, rating, review, recipe }) => {

  let reviewDescription
  if (review) {
    reviewDescription = <p>Review: {review}</p>
  }
  return (
    <div className='review-tile'>
      <h5>{title}</h5>
      <p>Rating: {rating}</p>
      {reviewDescription}
      <p>{recipe}</p>
    </div>
  )
}

export default ReviewTile
