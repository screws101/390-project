const RecipeCard = ({ name, cookTime, calories }) => {
  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{name}</h3>
      <div className="recipe-meta">
        <span className="cook-time"> {cookTime}</span>
        <span className="calories"> {calories}</span>
      </div>
    </div>
  );
};

export default RecipeCard;