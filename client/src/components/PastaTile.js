import React from "react";
import { Link } from 'react-router-dom'

<<<<<<< HEAD

const PastaTile = ({ name }) => {
  return (
    <div className="pasta-tile">
    {name}
    </div>
  )
=======
const PastaTile = (pasta) => {
  return <div className="pasta-tile">
     <Link to={`/pastas/${pasta.id}`}>{pasta.name}</Link>
    </div>;
>>>>>>> f4d661d844a644720761475d3b5266e5e1aa1f6a
};

export default PastaTile;
