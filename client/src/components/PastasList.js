import React, { useState, useEffect } from "react";
import PastaTile from "./PastaTile";
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

  const pastasList = pastas.map((pastaObject) => {
    return <PastaTile key={pastaObject.id} {...pastaObject} />;
  });

  return (
    <>
      <div className="call-to-action">
        <h3>Click on a Pasta to learn more!</h3>
      </div>
      <div className="list-container">
        <div className="column-grid"> {pastasList}</div>
      </div>
    </>
  );
};

export default PastasList;
