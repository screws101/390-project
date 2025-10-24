// IngredientForm component form for adding new ingredients to pantry or grocery list
import { useState } from 'react';
import "../styles/IngredientForm.css";

const IngredientForm = ({ onSubmit, onCancel }) => {
    // State for form fields
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, quantity });
        
        // Call the parent's onSubmit handler with the form element
        if (onSubmit) {
            onSubmit(e);
        }
        
        // Reset form after submission
        setName('');
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                {/* Ingredient name input field */}
                <div className='name-field'>
                    <label htmlFor="name">Ingredient Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Quantity input field */}
                <div className='quantity-field'>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                        required
                    />
                </div>

                {/* Form action buttons */}
                <div className="form-buttons">
                    <button type="submit" className='add-ingredient'>Add Ingredient</button>
                    {onCancel && (
                        <button type="button" onClick={onCancel} className='cancel'>Cancel</button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default IngredientForm;
