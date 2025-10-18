const IngredientCard = ({ name, quantity, onRemove }) => {
  return (
    <div className="ingredient-card">
      <div className="ingredient-content">
        <h3 className="ingredient-title">{name}</h3>
        <div className="ingredient-meta">
          <span className="quantity">Qty: {quantity}</span>
        </div>
      </div>
      {onRemove && (
        <button 
          className="btn-remove-ingredient" 
          onClick={onRemove}
          aria-label="Remove ingredient"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default IngredientCard;