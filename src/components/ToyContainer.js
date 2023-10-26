import React, {useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysOnDisplay, newToy, onDeleteToy, onUpdateToy}) {

useEffect(()=>{

},[newToy])


  return (
    <div id="toy-collection">{toysOnDisplay.map(toy=>
      <ToyCard onUpdateToy={onUpdateToy} onDeleteToy={onDeleteToy} key={toy.id} toy={toy}/>
      )}</div>
  );
}

export default ToyContainer;
