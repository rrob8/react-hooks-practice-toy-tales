import React, {useState} from "react";

function ToyCard({toy, onDeleteToy, onUpdateToy}) {

 

  function handleClick () {
    onUpdateToy(toy)
    
  }

    

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn"
      onClick={handleClick}
      >Like {"<3"}</button>
      <button 
      onClick={()=>onDeleteToy(toy)}
      className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
