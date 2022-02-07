import React, { useState, useEffect } from "react";

const PastaShow = (props) => {
  const [pasta, setPasta] = useState({
    name: "",
    description: "",
    category: {},
  });

  const pastaId = props.match.params.id;

  const getPasta = async () => {
    try {
      const response = await fetch(`/api/v1/pastas/${pastaId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setPasta(body.pasta);
    } catch (error) {
      console.error(`Error in fetch ${error.message}`);
    }
  };

  useEffect(() => {
    getPasta();
  }, []);
  return (
    <>
      <h2 className="pasta-title">{pasta.name}</h2>
      <div className="pasta-info">
        <p className="pasta-desc">{pasta.description}</p>
        <p className="pasta-category">Category: {pasta.category.name}</p>
      </div>
    </>
  );
};

export default PastaShow;
