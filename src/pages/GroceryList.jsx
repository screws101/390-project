// GroceryList page component manages grocery items with quantity tracking
import { useState } from 'react';
import GroceryCard from '../components/GroceryCards';
import IngredientForm from '../components/IngredientForm';
import '../styles/GroceryList.css';

const GroceryList = () => {
    // Sample grocery items (just examples)
    const initialGroceryItems = [
        { name: 'Bread', quantity: 2 },
        { name: 'Milk', quantity: 1 },
        { name: 'Eggs', quantity: 12 },
        { name: 'Chicken Breast', quantity: 4 },
        { name: 'Rice', quantity: 1 },
        { name: 'Tomatoes', quantity: 6 },
        { name: 'Onions', quantity: 3 },
        { name: 'Cheese', quantity: 2 },
        { name: 'Apples', quantity: 8 },
        { name: 'Bananas', quantity: 6 }
    ];

    // State management
    const [groceryItems, setGroceryItems] = useState(initialGroceryItems);
    const [showForm, setShowForm] = useState(false);

    // Filter out items with quantity 0
    const availableItems = groceryItems.filter(item => item.quantity > 0);

    // Handle quantity changes for grocery items
    const handleQuantityChange = (itemName, newQuantity) => {
        setGroceryItems(prevItems => 
            prevItems.map(item => 
                item.name === itemName 
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Handle adding new items to the grocery list
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Get form data from the form element
        const formData = new FormData(e.target);
        const newItem = {
            name: formData.get('name') || '',
            quantity: parseInt(formData.get('quantity')) || 0
        };
        
        // Add the new item to the grocery items array
        setGroceryItems(prevItems => [...prevItems, newItem]);
        
        console.log('Ingredient submitted successfully:', newItem);
        setShowForm(false);
    };

    // Handle canceling the ingredient form
    const handleCancel = () => {
        setShowForm(false);
    };
    
    // Show ingredient form when adding a new grocery item
    if (showForm) {
        return (
            <div className="grocery-form-container">
                <IngredientForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
            </div>
        );
    }

    return (
        <div className="grocery-container">
            {/* Button to add new items to grocery list */}
            <button className="add-ingredient-btn" onClick={() => setShowForm(true)}>
                Add New Ingredient
            </button>
            
            {/* Grid of grocery item cards */}
            <div className="grocery-grid">
                {availableItems.map((item, index) => (
                    <GroceryCard 
                        key={index}
                        name={item.name}
                        quantity={item.quantity}
                        onQuantityChange={(newQuantity) => handleQuantityChange(item.name, newQuantity)}
                    />
                ))}
            </div>
        </div>
    );
};

export default GroceryList;