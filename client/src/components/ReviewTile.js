import React from "react";

const ReviewTile = ({ title, rating, body, recipe }) => {
  let reviewDescription;
  if (body) {
    reviewDescription = <p>Review: {body}</p>;
  }
  return (
    <div className="review-tile">
      <h5>{title}</h5>
      <p>Rating: {rating}</p>
      {reviewDescription}
      <a href={recipe} target="_blank">
        {recipe}
      </a>
    </div>
  );
};

export default ReviewTile;
