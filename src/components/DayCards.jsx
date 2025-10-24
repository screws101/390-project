import { useNavigate } from 'react-router-dom';
import "../styles/DayCards.css";

const DayCard = ({ day, recipes = [], onRemoveRecipe }) => {
    const navigate = useNavigate();

    const handleAddRecipe = () => {
        navigate('/recipes');
    };

    const handleRemoveRecipe = (recipeIndex) => {
        if (onRemoveRecipe) {
            onRemoveRecipe(day, recipeIndex);
        }
    };
    return (
        <div className="day-card">
            <h3 className="day-title">{day}</h3>
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
            <button className="day-action-btn" onClick={handleAddRecipe}>Add Recipe</button>
        </div>
    );
};

export default DayCard;
