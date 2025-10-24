import { useState } from 'react';
import IngredientCard from '../components/IngredientCard';
import IngredientForm from '../components/IngredientForm';
import '../styles/Pantry.css';

const Pantry = () => {
    // Sample pantry data - you can replace this with actual data
    const initialIngredients = [
        { name: 'Flour', quantity: 2 },
        { name: 'Sugar', quantity: 1 },
        { name: 'Eggs', quantity: 12 },
        { name: 'Milk', quantity: 1 },
        { name: 'Butter', quantity: 3 },
        { name: 'Salt', quantity: 1 },
        { name: 'Pepper', quantity: 1 },
        { name: 'Onions', quantity: 5 },
        { name: 'Garlic', quantity: 3 },
        { name: 'Tomatoes', quantity: 6 }
    ];

    const [pantryIngredients, setPantryIngredients] = useState(initialIngredients);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    // Filter out ingredients with quantity 0 and apply search filter
    const availableIngredients = pantryIngredients.filter(ingredient => 
        ingredient.quantity > 0 && 
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleQuantityChange = (ingredientName, newQuantity) => {
        setPantryIngredients(prevIngredients => 
            prevIngredients.map(ingredient => 
                ingredient.name === ingredientName 
                    ? { ...ingredient, quantity: newQuantity }
                    : ingredient
            )
        );
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Get form data from the form element
        const formData = new FormData(e.target);
        const newIngredient = {
            name: formData.get('name') || '',
            quantity: parseInt(formData.get('quantity')) || 0
        };
        
        // Add the new ingredient to the pantry ingredients array
        setPantryIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        
        console.log('Ingredient submitted successfully:', newIngredient);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    if (showForm) {
        return (
            <div className="pantry-form-container">
                <IngredientForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
            </div>
        );
    }

    return (
        <div className="pantry-container">
            <h2>Your Pantry</h2>
            <div className="pantry-controls">
                <input
                    type="text"
                    placeholder="Search ingredients..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="add-ingredient-btn" onClick={() => setShowForm(true)}>
                    Add New Ingredient
                </button>
            </div>
            <div className="ingredients-grid">
                {availableIngredients.map((ingredient, index) => (
                    <IngredientCard 
                        key={index}
                        name={ingredient.name}
                        quantity={ingredient.quantity}
                        onQuantityChange={(newQuantity) => handleQuantityChange(ingredient.name, newQuantity)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pantry;
