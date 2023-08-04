import { useState } from "react";

export default function FormAddRecipe({ onSetRecipes }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newRecipe = {
      id,
      name,
      ingredients,
      directions,
    };

    onSetRecipes(newRecipe);

    setName("");
    setIngredients([]);
    setDirections("");
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Add Recipe Form</h2>

      <label>Name of recipe</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Ingredients</label>
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value.split(","))}
      />

      <label>Directions</label>
      <textarea
        cols={20}
        rows={15}
        value={directions}
        onChange={(e) => setDirections(e.target.value)}
      ></textarea>

      <button className="button">Add recipe</button>
    </form>
  );
}
