import React, { useState } from "react";

const NewPastaForm = ({ postPasta }) => {
    const [newPasta, setNewPasta] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = event => {
    setNewPasta({
      ...newPasta,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newPasta.name.toLowerCase()
    postPasta(newPasta)
    clearForm();
  };

  const clearForm = () => {
    setNewPasta({
      name: "",
      description: "",
    });
  };

    return  (
    <div>
      <h1>Add a new pasta:</h1>
      <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={newPasta.name}
              />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              onChange={handleInputChange}
              value={newPasta.description}
            />
          </label>
          <div className="button">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  ;
};

export default NewPastaForm;
