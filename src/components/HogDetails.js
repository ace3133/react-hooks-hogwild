import React from "react";

function HogDetails ({ hog }){
    return(
        <div className="ui segment">
<h2>{hog.name}</h2>
    <p>specialty:{hog.specialty}</p>
    <p>Weight:{hog.weight} 1bs</p>
    <p>Greased:{hog.greased ? "Yes" : "No"}</p>
    <p>Highest Medal Achived: {hog["highest medal achived"]}</p>
        </div>
    )
}
export default HogDetails