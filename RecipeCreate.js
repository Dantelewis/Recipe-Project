// RecipeCreate.jsx
import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = { name: "", cuisine: "", photo: "", ingredients: "", preparation: "" };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState }); // Reset form
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required />
              <input name="cuisine" type="text" value={formData.cuisine} onChange={handleChange} placeholder="Cuisine" required />
              <input name="photo" type="url" value={formData.photo} onChange={handleChange} placeholder="URL" required />
              <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Ingredients" required rows={4} />
              <textarea name="preparation" value={formData.preparation} onChange={handleChange} placeholder="Preparation" required rows={4} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

