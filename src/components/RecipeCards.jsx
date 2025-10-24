import "../styles/RecipeCards.css"

const RecipeCard = ({name, cookTime, calories, ingredients, onDelete, onAddToMealPlan }) => {
    return(
        <div className="recipe-card">
            <div className="recipe-header">
                <div className="name">
                    <h3 className="recipe-name">{name}</h3>
                </div>
                <button className="delete-btn" onClick={onDelete}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
            <div className="recipe-info">
                <span className="cook-time">{cookTime} min</span>
                <span className="calories">{calories} cal</span>
            </div>
            <div className="recipe-ingredients">
                <h4>Ingredients:</h4>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>

            </div>

            <div className="btn-add-to-plan">
                <button className="btn-add" onClick={() => onAddToMealPlan({name, cookTime, calories, ingredients})}>Add to Meal Plan</button>
            </div>

        </div>
    );
};

export default RecipeCard;