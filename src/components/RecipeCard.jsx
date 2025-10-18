const RecipeCard = ({ name, cookTime, calories, ingredients, onAddToMealPlan }) => {
  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{name}</h3>
      <div className="recipe-meta">
        <span className="cook-time">{cookTime}</span>
        <span className="calories">{calories}</span>
      </div>
      {ingredients && ingredients.length > 0 && (
        <div className="recipe-ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
      {onAddToMealPlan && (
        <button 
          className="btn-add-to-plan"
          onClick={onAddToMealPlan}
        >
          Add to Meal Plan
        </button>
      )}
    </div>
  );
};

export default RecipeCard;