const GroceryCard = ({ name, quantity, purchased, onToggle, onRemove }) => {
  return (
    <div className={`grocery-card ${purchased ? 'purchased' : ''}`}>
      <div className="grocery-content">
        <h3 className="grocery-title">{name}</h3>
        <div className="grocery-meta">
          <span className="quantity">Qty: {quantity}</span>
        </div>
      </div>
      <div className="grocery-actions">
        <button 
          className={`btn-check ${purchased ? 'checked' : ''}`}
          onClick={onToggle}
          aria-label={purchased ? "Mark as not purchased" : "Mark as purchased"}
        >
          {purchased ? '✓' : '○'}
        </button>
        <button 
          className="btn-remove-grocery"
          onClick={onRemove}
          aria-label="Remove item"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default GroceryCard;