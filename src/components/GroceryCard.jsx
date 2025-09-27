const GroceryCard = ({ name, quantity }) => {
  return (
    <div className="grocery-card">
      <h3 className="grocery-title">{name}</h3>
      <div className="grocery-meta">
        <span className="quantity">{quantity}</span>
      </div>
      <button className="btn-add">Add</button>
    </div>
  );
};

export default GroceryCard;