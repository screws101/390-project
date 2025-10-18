import { useState } from 'react';
import PageContent from '../components/PageContent';
import RecipeCard from '../components/RecipeCard';
import { useAppContext } from '../context/AppContext';
import '../styles/recipecard.css';

const Recipes = () => {
  const { recipes, addRecipeToMealPlan } = useAppContext();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddToMealPlan = () => {
    if (selectedRecipe && selectedDay) {
      addRecipeToMealPlan(selectedDay, selectedRecipe);
      setSelectedRecipe(null);
      setSelectedDay('');
    }
  };

  return (
    <PageContent>
      {selectedRecipe && (
        <div className="meal-plan-modal">
          <div className="modal-content">
            <h3>Add to Meal Plan</h3>
            <p>Select a day for this recipe:</p>
            <select 
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="day-selector"
            >
              <option value="">Choose a day</option>
              {daysOfWeek.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <div className="modal-actions">
              <button 
                className="btn-modal-add"
                onClick={handleAddToMealPlan}
                disabled={!selectedDay}
              >
                Add to Plan
              </button>
              <button 
                className="btn-modal-cancel"
                onClick={() => {
                  setSelectedRecipe(null);
                  setSelectedDay('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            cookTime={recipe.cookTime}
            calories={recipe.calories}
            ingredients={recipe.ingredients}
            onAddToMealPlan={() => setSelectedRecipe(recipe.id)}
          />
        ))}
      </div>
    </PageContent>
  );
};

export default Recipes;
