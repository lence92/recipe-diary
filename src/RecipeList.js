import Recipe from "./Recipe";

export default function RecipeList({ recipes, onOpenRecipe }) {
  return (
    <ul className="recipe-list">
      {recipes.map((recipe) => (
        <li
          className="recipe"
          key={recipe.id}
          onClick={() => onOpenRecipe(recipe)}
        >
          {recipe.name}
        </li>
      ))}
    </ul>
  );
}
