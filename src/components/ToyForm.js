import React, {useState} from "react";

function ToyForm({onAddToy}) {

  // make the toyform stateful
  const [form, setForm ] = useState({
    name:'',
    image:'',
  })

function handleSubmit (e) {
  e.preventDefault()
  onAddToy(form)
}

function handleChange (e) {
  const {name, value} = e.target
  const obj = {
    ...form,
    [name]:value,
  }
  setForm(obj)
}


  return (
    <div className="container">
      <form className="add-toy-form"
      onSubmit={handleSubmit}
      >
        <h3>Create a toy!</h3>
        <input
        onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
        onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
