import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({handleFilterChange, handleSortChange }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<label htmlFor="sort"> Sort By</label>
				<select id="sort" onChange={handleSortChange}>
					<option valve="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>
			<div className="ui checkbox">
        <input type="checkbox" onChange={handleFilterChange} id="greased" />
		<label htmlFor="greased">Show Greased Hogs Only</label>
		</div>
		</div>
	);
};

export default Nav;
