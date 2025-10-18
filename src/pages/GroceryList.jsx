import { useState } from 'react';
import GroceryCard from '../components/GroceryCard';
import PageContent from '../components/PageContent';
import { useAppContext } from '../context/AppContext';
import '../styles/grocerycard.css';

const GroceryList = () => {
  const { groceryList, addGroceryItem, removeGroceryItem, toggleGroceryPurchased } = useAppContext();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim() && newItemQuantity) {
      addGroceryItem(newItemName.trim(), newItemQuantity);
      setNewItemName('');
      setNewItemQuantity('');
      setShowAddForm(false);
    }
  };

  const unpurchasedItems = groceryList.filter(item => !item.purchased);
  const purchasedItems = groceryList.filter(item => item.purchased);

  return (
    <PageContent>
      <div className="grocery-header">
        <button 
          className="btn-add-grocery"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '+ Add Item'}
        </button>
      </div>

      {showAddForm && (
        <form className="add-grocery-form" onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="grocery-input"
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
            className="grocery-input"
            min="1"
            required
          />
          <button type="submit" className="btn-submit-grocery">Add to List</button>
        </form>
      )}

      {unpurchasedItems.length > 0 && (
        <>
          <h2 className="section-title">To Buy</h2>
          <div className="grocery-grid">
            {unpurchasedItems.map((grocery) => (
              <GroceryCard
                key={grocery.id}
                name={grocery.name}
                quantity={grocery.quantity}
                purchased={grocery.purchased}
                onToggle={() => toggleGroceryPurchased(grocery.id)}
                onRemove={() => removeGroceryItem(grocery.id)}
              />
            ))}
          </div>
        </>
      )}

      {purchasedItems.length > 0 && (
        <>
          <h2 className="section-title purchased-title">Purchased</h2>
          <div className="grocery-grid">
            {purchasedItems.map((grocery) => (
              <GroceryCard
                key={grocery.id}
                name={grocery.name}
                quantity={grocery.quantity}
                purchased={grocery.purchased}
                onToggle={() => toggleGroceryPurchased(grocery.id)}
                onRemove={() => removeGroceryItem(grocery.id)}
              />
            ))}
          </div>
        </>
      )}

      {groceryList.length === 0 && (
        <p className="empty-grocery-message">Your grocery list is empty. Add some items!</p>
      )}
    </PageContent>
  );
};

export default GroceryList;

