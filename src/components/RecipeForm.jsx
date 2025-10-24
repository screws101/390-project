// RecipeForm component form for creating new recipes with all required fields
import { useState } from 'react';
import "../styles/RecipeForm.css";

const RecipeForm = ({ onSubmit, onCancel }) => {
    // State for form fields
    const [name, setName] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [calories, setCalories] = useState('');
    const [ingredients, setIngredients] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, calories, ingredients });
        
        // Call the parent's onSubmit handler with the form element
        if (onSubmit) {
            onSubmit(e);
        }
        
        // Reset form after submission
        setName('');
        setCookTime('');
        setCalories('');
        setIngredients('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                {/* Recipe name input field */}
                <div className='name-field'>
                    <label htmlFor="name">Recipe Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Cook time input field */}
                <div className='cook-time-field'>
                    <label htmlFor="cookTime">Cook Time:</label>
                    <input
                        type="text"
                        id="cookTime"
                        name="cookTime"
                        value={cookTime}
                        onChange={(e) => setCookTime(e.target.value)}
                        placeholder="e.g., 30 min"
                        required
                    />
                </div>

                {/* Calories input field */}
                <div className='cal-field'>
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="number"
                        id="calories"
                        name="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />
                </div>

                {/* Ingredients textarea field */}
                <div className='ingredient-field'>
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter ingredients separated by commas"
                        required
                    />
                </div>

                {/* Form action buttons */}
                <div className="form-buttons">
                    <button type="submit" className='add-recipe'>Add Recipe</button>
                    {onCancel && (
                        <button type="button" onClick={onCancel} className='cancel'>Cancel</button>
                    )}
                </div>
            </div>
        </form>
    );
};

export default RecipeForm;
