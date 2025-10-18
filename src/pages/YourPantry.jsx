import { useState } from 'react';
import PageContent from '../components/PageContent';
import IngredientCard from '../components/IngredientCard';
import { useAppContext } from '../context/AppContext';
import '../styles/ingredientcard.css';

const YourPantry = () => {
  const { pantryItems, addPantryItem, removePantryItem } = useAppContext();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim() && newItemQuantity) {
      addPantryItem(newItemName.trim(), newItemQuantity);
      setNewItemName('');
      setNewItemQuantity('');
      setShowAddForm(false);
    }
  };

  return (
    <PageContent>
      <div className="pantry-header">
        <button 
          className="btn-add-item"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Ingredient'}
        </button>
      </div>

      {showAddForm && (
        <form className="add-item-form" onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Ingredient name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="form-input"
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
            className="form-input"
            min="1"
            required
          />
          <button type="submit" className="btn-submit">Add to Pantry</button>
        </form>
      )}

      <div className="ingredients-grid">
        {pantryItems.length > 0 ? (
          pantryItems.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              name={ingredient.name}
              quantity={ingredient.quantity}
              onRemove={() => removePantryItem(ingredient.id)}
            />
          ))
        ) : (
          <p className="empty-message">Your pantry is empty. Add some ingredients!</p>
        )}
      </div>
    </PageContent>
  );
};

export default YourPantry;
