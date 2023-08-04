import { useState } from "react";
import FormAddRecipe from "./FormAddRecipe";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

const initialRecipes = [
  {
    id: 1,
    name: "Franch Omlate",
    ingredients: ["2 eggs", "20gr moccarela cheese", "20gr mashrooms"],
    directions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Suspendisse dictum lacus in est rutrum dictum. " +
      "Nulla euismod tempor augue, id fringilla mi convallis ac. " +
      "Etiam viverra commodo imperdiet. Phasellus sed dolor ut erat bibendum rutrum id nec orci. " +
      "Nullam tortor tortor, iaculis sit amet consequat eu, consequat quis leo. " +
      "Aliquam turpis velit, venenatis a dolor eu, suscipit tempus libero. " +
      "Pellentesque mollis egestas ipsum et feugiat. Proin ac molestie sem. " +
      "Suspendisse maximus massa id dui sollicitudin, non vulputate eros gravida.",
  },
  {
    id: 2,
    name: "Pancaks",
    ingredients: [
      "2 eggs",
      "150gr flower",
      "10gr bakeing powder",
      "1 cup mineral water",
    ],
    directions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Vestibulum porttitor pharetra egestas. Aenean commodo at eros vitae feugiat. " +
      "Cras ante nisl, fringilla vel porta sit amet, pretium et quam. " +
      "Nunc eget odio aliquam, convallis ante eget, tempor eros. " +
      "Suspendisse semper eleifend leo, non mattis lacus. ",
  },
];

export default function App() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [openRecipe, setOpenRecipe] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleOpenRecipe(recipe) {
    setOpenRecipe(recipe);
    setShowForm(false);
  }

  function handleAddRecipe(recipe) {
    setRecipes((recipes) => [...recipes, recipe]);
    setShowForm(false);
  }

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  return (
    <div className="recipe-diary">
      <div>
        <RecipeList recipes={recipes} onOpenRecipe={handleOpenRecipe} />

        <button className="toggleFormBtn" onClick={handleShowForm}>
          {showForm ? "Close" : "Add recipe"}
        </button>
      </div>

      {openRecipe && <Recipe openRecipe={openRecipe} />}

      {showForm && <FormAddRecipe onSetRecipes={handleAddRecipe} />}
    </div>
  );
}
