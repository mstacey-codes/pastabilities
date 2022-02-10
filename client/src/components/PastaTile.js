import React from "react";
import { Link } from "react-router-dom";

const PastaTile = (pasta) => {
  let averageRating;
  let numberOfReviews;
  if (pasta.averageRating) {
    averageRating = <p>{pasta.averageRating} ⭐</p>;
    numberOfReviews = <p>{pasta.numberOfReviews} Reviews</p>;
  }
  return (
    <div className="pasta-tile">
      <Link to={`/pastas/${pasta.id}`}>{pasta.name}</Link>
      {averageRating}
      {numberOfReviews}
    </div>
  );
};

export default PastaTile;
