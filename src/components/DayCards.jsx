// DayCard component - displays recipes for a specific day in the meal plan
import { useNavigate } from 'react-router-dom';
import "../styles/DayCards.css";

const DayCard = ({ day, recipes = [], onRemoveRecipe }) => {
    const navigate = useNavigate();

    // Navigate to recipes page when user wants to add a recipe
    const handleAddRecipe = () => {
        navigate('/recipes');
    };

    // Handle removing a recipe from this specific day
    const handleRemoveRecipe = (recipeIndex) => {
        if (onRemoveRecipe) {
            onRemoveRecipe(day, recipeIndex);
        }
    };
    
    return (
        <div className="day-card">
            {/* Display the day name as the card title */}
            <h3 className="day-title">{day}</h3>
            
            {/* Display recipes for a given day or shows default"no recipes" message */}
            <div className="day-recipes">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div key={index} className="day-recipe-item">
                            <div className="recipe-info">
                                <span className="recipe-name">{recipe.name}</span>
                                <div className="recipe-details">
                                    <span className="recipe-cook-time">{recipe.cookTime}</span>
                                    <span className="recipe-calories">{recipe.calories}</span>
                                </div>
                            </div>
                            {/* Remove button for each recipe */}
                            <button 
                                className="remove-recipe-btn" 
                                onClick={() => handleRemoveRecipe(index)}
                                title="Remove recipe"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-recipes">No recipes planned</p>
                )}
            </div>
            
            {/* Button to add a new recipe to this day */}
            <button className="day-action-btn" onClick={handleAddRecipe}>Add Recipe</button>
        </div>
    );
};

export default DayCard;
