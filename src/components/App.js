import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ toysOnDisplay, setToysOnDisplay] = useState([])
  const [newToy, setNewToy] = useState({})
  const [deletedToy, setDeletedToy] = useState({})
  const [updatedToy, setUpdatedToy] = useState({})



  useEffect(()=>{
    fetch(`http://localhost:3001/toys`)
    .then(r=> r.json())
    .then(data=> setToysOnDisplay(data))
  },[])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function deleteToy (oldToy) {
    
    const newCollection = [...toysOnDisplay].filter(toy =>toy !== oldToy)
    setToysOnDisplay(newCollection)
    
      setDeletedToy(oldToy)
    

  }

  useEffect(()=>{
    if (deletedToy.id) {
    fetch(`http://localhost:3001/toys/${deletedToy.id}`,{
      method:"DELETE",
    })
  }
  },[deletedToy])
  
  function updateToy (likedToy) {
    console.log(likedToy.likes)
    const updatedToys = [...toysOnDisplay].map(toy=> 
      toy == likedToy? {...toy, likes: toy.likes + 1} : toy)
      setUpdatedToy(likedToy)
    setToysOnDisplay(updatedToys)
  }

  useEffect(()=>{
    
    if (updatedToy.id) {
    fetch(`http://localhost:3001/toys/${updatedToy.id}`,{
      method:'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes:updatedToy.likes + 1,
      }),
        
      }) 
    }
  
  },[updatedToy])



  function addToy (toy) {
    fetch(`http://localhost:3001/toys`,{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toy),
    })
    
    setNewToy(toy)
  }

  useEffect(()=>{
    const newCollection = [...toysOnDisplay, newToy]
    setToysOnDisplay(newCollection)
  },[newToy])


  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onUpdateToy={updateToy} onDeleteToy={deleteToy} key={newToy.id}  toysOnDisplay={toysOnDisplay} />
    </>
  );
}

export default App;
