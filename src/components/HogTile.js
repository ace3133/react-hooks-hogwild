import React from "react";

function HogTile({hog,onClick, onHide}){
   const handleClick =()=>{
    onClick(hog);
   }
   const handleHideClick=()=>{
    onHide(hog);
   }
   return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          <div className="meta">{hog.specialty}</div>
        </div>
        <div className="extra content">
          <div className="ui buttons">
            <button className="ui button" onClick={handleClick}>
              Details
            </button>
            <div className="or"></div>
            <button className="ui red button" onClick={handleHideClick}>
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HogTile;