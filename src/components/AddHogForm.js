import React, { useState } from "react";

const AddHogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    highestMedalAchieved: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    onAddHog(formData);
 
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      highestMedalAchieved: "",
      image: "",
    });
  };

  return (
    <div>
      <h2>Add New Hog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="specialty">Specialty:</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="greased">Greased:</label>
          <input
            type="checkbox"
            id="greased"
            name="greased"
            checked={formData.greased}
            onChange={() =>
              setFormData({ ...formData, greased: !formData.greased })
            }
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="highestMedalAchieved">Highest Medal Achieved:</label>
          <input
            type="text"
            id="highestMedalAchieved"
            name="highestMedalAchieved"
            value={formData.highestMedalAchieved}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Hog</button>
      </form>
    </div>
  );
};

export default AddHogForm;
