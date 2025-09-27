const IngredientCard = ({ name, quantity }) => {
  return (
    <div className="ingredient-card">
      <h3 className="ingredient-title">{name}</h3>
      <div className="ingredient-meta">
        <span className="quantity">{quantity}</span>
      </div>
    </div>
  );
};

export default IngredientCard;