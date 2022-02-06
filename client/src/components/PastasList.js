import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PastasList = (props) => {
  const [pastas, setPastas] = useState([]);

  const getPastas = async () => {
    try {
      const response = await fetch(`/api/v1/pastas`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setPastas(body.pastas);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getPastas();
  }, []);

  const pastaListItems = pastas.map((pasta) => {
    return (
      <div className="pasta-tile" key={pasta.id}>
        <Link to={`/pastas/${pasta.id}`}>{pasta.name}</Link>
      </div>
    );
  });

  return (
    <>
      <div className="call-to-action">
        <h3>Click on a Pasta to learn more!</h3>
      </div>
      <div className="list-container">
        <div className="column-grid">{pastaListItems}</div>
      </div>
    </>
  );
};

export default PastasList;
