export default function Recipe({ openRecipe }) {
  return (
    <div>
      <h2>{openRecipe.name}</h2>
      <section>
        <h3>Ingredients:</h3>
        <ul>
          {openRecipe.ingredients.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Directions:</h3>
        <p>{openRecipe.directions}</p>
      </section>
    </div>
  );
}
