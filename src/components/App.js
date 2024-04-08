import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import HogDetails from "./HogDetails";
import AddHogForm from "./AddHogForm"
function App() {
  const [selectedHog, setSelectedHog] = useState(null);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  const handleFilterChange = (e) => {
    setGreasedOnly(e.target.checked);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleHide = (hogToHide) => {
  
    console.log(`Hiding hog: ${hogToHide.name}`);
  };
const handleAddHog =(newHog)=> {
	hogs.push(newHog);
	setSelectedHog(null);
	setGreasedOnly(false);
	setSortBy('name');
	
}
  let filteredHogs = greasedOnly ? hogs.filter((hog) => hog.greased) : hogs;

  if (sortBy === "name") {
    filteredHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "weight") {
    filteredHogs.sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav
        handleFilterChange={handleFilterChange}
        handleSortChange={handleSortChange}
      />
      <div className="ui grid container">
        {filteredHogs.map((hog, index) => (
          <HogTile
            key={index}
            hog={hog}
            onClick={handleHogClick}
            onHide={handleHide}
          />
        ))}
      </div>
      {selectedHog && <HogDetails hog={selectedHog} />}
    </div>
  );
}

export default App;
