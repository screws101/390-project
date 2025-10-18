import { useState } from 'react';
import PageContent from '../components/PageContent';
import { useAppContext } from '../context/AppContext';
import '../styles/mealplan.css';

const MealPlan = () => {
  const { mealPlan, recipes, addRecipeToMealPlan, removeRecipeFromMealPlan } = useAppContext();
  const [selectedDay, setSelectedDay] = useState(null);
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddRecipe = (day, recipeId) => {
    addRecipeToMealPlan(day, recipeId);
    setSelectedDay(null);
  };

  return (
    <PageContent>
      <div className="meal-plan-container">
        {daysOfWeek.map(day => (
          <div key={day} className="day-card">
            <h2 className="day-title">{day}</h2>
            <div className="day-meals">
              {mealPlan[day].length > 0 ? (
                mealPlan[day].map(recipe => (
                  <div key={recipe.id} className="meal-item">
                    <div className="meal-info">
                      <h4>{recipe.name}</h4>
                      <p className="meal-meta">{recipe.cookTime} • {recipe.calories}</p>
                    </div>
                    <button
                      className="btn-remove"
                      onClick={() => removeRecipeFromMealPlan(day, recipe.id)}
                      aria-label="Remove recipe"
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p className="no-meals">No meals planned</p>
              )}
            </div>
            <button 
              className="btn-add-meal"
              onClick={() => setSelectedDay(selectedDay === day ? null : day)}
            >
              {selectedDay === day ? 'Cancel' : '+ Add Meal'}
            </button>
            
            {selectedDay === day && (
              <div className="recipe-selector">
                <h3>Select a Recipe</h3>
                <div className="recipe-list">
                  {recipes.map(recipe => (
                    <div
                      key={recipe.id}
                      className="recipe-option"
                      onClick={() => handleAddRecipe(day, recipe.id)}
                    >
                      <h4>{recipe.name}</h4>
                      <p>{recipe.cookTime} • {recipe.calories}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </PageContent>
  );
};

export default MealPlan;
