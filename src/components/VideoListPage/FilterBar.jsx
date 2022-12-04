import React from 'react';
// import { useLinkClickHandler } from 'react-router-dom';


export const FilterBar = () => {
  const clickHandler = (event)  => 
  {
    console.log(event.target.value);
    console.log("clicke")
  }
  return (
    <div>
      <div className="genre-button-container">
        <button className="genre-button" value ="All"onClick={(e) => clickHandler(e)}> All</button>
        <button className="genre-button" onClick={(e) => clickHandler(e)}>Indie</button>
        <button className="genre-button" >Indie</button>
        <button className="genre-button">Pop</button>
        <button className="genre-button">Background</button>
        <button className="genre-button">Instrumental</button>
        <button className="genre-button">Hip-hop</button>
        <button className="genre-button">Live</button>
      </div>
    </div>
  );
}


