import Recipe from "./Recipe";

export default function RecipeList({ recipes, onOpenRecipe }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 m-5">
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          className="relative"
          onClick={() => onOpenRecipe(recipe)}
        >
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={recipe.source}
              alt=""
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {recipe.name}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {recipe.name}
          </p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {recipe.time}
          </p>
        </li>
      ))}
    </ul>
  );
}
