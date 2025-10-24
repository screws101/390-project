import DayCard from './DayCards';
import { useState, useEffect } from 'react';

const MealPlan = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [mealPlanData, setMealPlanData] = useState({});
    
    // Load meal plan data from localStorage
    useEffect(() => {
        const savedMealPlan = localStorage.getItem('mealPlan');
        if (savedMealPlan) {
            setMealPlanData(JSON.parse(savedMealPlan));
        }
    }, []);

    // Listen for storage changes to update meal plan
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

    const handleRemoveRecipe = (day, recipeIndex) => {
        const updatedMealPlan = { ...mealPlanData };
        if (updatedMealPlan[day]) {
            updatedMealPlan[day].splice(recipeIndex, 1);
            if (updatedMealPlan[day].length === 0) {
                delete updatedMealPlan[day];
            }
            setMealPlanData(updatedMealPlan);
            localStorage.setItem('mealPlan', JSON.stringify(updatedMealPlan));
        }
    };

    return (
        <div className="day-cards-container">
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
