// MealPlan component - displays the weekly meal plan with individual day cards
import DayCard from './DayCards';
import { useState, useEffect } from 'react';

const MealPlan = () => {
    // Array of days of the week for rendering meal plan cards
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [mealPlanData, setMealPlanData] = useState({});
    
    // Load meal plan data from localStorage on component mount
    useEffect(() => {
        const savedMealPlan = localStorage.getItem('mealPlan');
        if (savedMealPlan) {
            setMealPlanData(JSON.parse(savedMealPlan));
        }
    }, []);

    // Listen for storage changes to update meal plan when data changes from other components
    useEffect(() => {
        const handleStorageChange = () => {
            const savedMealPlan = localStorage.getItem('mealPlan');
            if (savedMealPlan) {
                setMealPlanData(JSON.parse(savedMealPlan));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Handles removing a recipe from a specific day in the meal plan
    const handleRemoveRecipe = (day, recipeIndex) => {
        const updatedMealPlan = { ...mealPlanData };
        if (updatedMealPlan[day]) {
            updatedMealPlan[day].splice(recipeIndex, 1);
            // Clean up empty day arrays
            if (updatedMealPlan[day].length === 0) {
                delete updatedMealPlan[day];
            }
            setMealPlanData(updatedMealPlan);
            localStorage.setItem('mealPlan', JSON.stringify(updatedMealPlan));
        }
    };

    return (
        <div className="day-cards-container">
            {/* Render a DayCard component for each day of the week */}
            {daysOfWeek.map((day) => (
                <DayCard 
                    key={day} 
                    day={day} 
                    recipes={mealPlanData[day] || []}
                    onRemoveRecipe={handleRemoveRecipe}
                />
            ))}
        </div>
    );
};

export default MealPlan;
