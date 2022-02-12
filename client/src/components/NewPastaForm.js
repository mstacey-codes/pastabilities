import React, { useState } from "react";

const NewPastaForm = ({ postPasta }) => {
  const [newPasta, setNewPasta] = useState({
    name: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setNewPasta({
      ...newPasta,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const clearForm = () => {
    setNewPasta({
      name: "",
      description: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validPost = await postPasta(newPasta);
    if (validPost) {
      clearForm();
    }
  };

  return (
    <div className="form">
      <h3 className="form-title">Add a new pasta to this category:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} value={newPasta.name} />
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
        </div>
      </form>
    </div>
  );
};

export default NewPastaForm;
