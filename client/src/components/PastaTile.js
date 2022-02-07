import React from "react";
import { Link } from 'react-router-dom'

const PastaTile = (pasta) => {
  return <div className="pasta-tile">
     <Link to={`/pastas/${pasta.id}`}>{pasta.name}</Link>
    </div>;
};

export default PastaTile;
