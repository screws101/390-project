import { useState, useEffect } from 'react';
import RecipeCards from '../components/RecipeCards';
import RecipeForm from '../components/RecipeForm';
import DaySelectionModal from '../components/DaySelectionModal';
import '../styles/DaySelectionModal.css';

const Recipes = () => {
    const [showForm, setShowForm] = useState(false);
    const [showDayModal, setShowDayModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([
        {
            name: 'Chocolate Chip Cookies',
            cookTime: '15 min',
            calories: '150',
            ingredients: ['flour', 'sugar', 'butter', 'chocolate chips', 'eggs']
        },
        {
            name: 'Pasta Carbonara',
            cookTime: '20 min',
            calories: '450',
            ingredients: ['pasta', 'eggs', 'bacon', 'parmesan', 'black pepper']
        },
        {
            name: 'Caesar Salad',
            cookTime: '10 min',
            calories: '200',
            ingredients: ['lettuce', 'croutons', 'parmesan', 'caesar dressing']
        },
        {
            name: 'Grilled Chicken',
            cookTime: '25 min',
            calories: '300',
            ingredients: ['chicken breast', 'olive oil', 'salt', 'pepper', 'garlic']
        }
    ]);

    // Update page title based on form state
    useEffect(() => {
        if (showForm) {
            document.title = 'Add a new recipe';
            // Update the header title by changing the URL hash
            window.location.hash = '#add-recipe';
        } else {
            document.title = 'Recipes';
            window.location.hash = '';
        }
    }, [showForm]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Get form data from the form element
        const formData = new FormData(e.target);
        const newRecipe = {
            name: formData.get('name') || '',
            cookTime: formData.get('cookTime') || '',
            calories: formData.get('calories') || '',
            ingredients: formData.get('ingredients') ? formData.get('ingredients').split(',').map(ing => ing.trim()) : []
        };
        
        // Add the new recipe to the recipes array
        setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
        
        console.log('Recipe submitted successfully:', newRecipe);
        setShowForm(false);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    const handleDeleteRecipe = (index) => {
        const recipeName = recipes[index].name;
        const isConfirmed = window.confirm(`Are you sure you want to delete "${recipeName}"?`);
        
        if (isConfirmed) {
            setRecipes(prevRecipes => prevRecipes.filter((_, i) => i !== index));
        }
    };

    const handleAddToMealPlan = (recipe) => {
        setSelectedRecipe(recipe);
        setShowDayModal(true);
    };

    const handleDaySelect = (day, recipe) => {
        // Store the meal plan data in localStorage for now
        const mealPlanData = JSON.parse(localStorage.getItem('mealPlan') || '{}');
        if (!mealPlanData[day]) {
            mealPlanData[day] = [];
        }
        mealPlanData[day].push(recipe);
        localStorage.setItem('mealPlan', JSON.stringify(mealPlanData));
        
        alert(`"${recipe.name}" has been added to ${day}!`);
    };

    const handleCloseModal = () => {
        setShowDayModal(false);
        setSelectedRecipe(null);
    };

    // Filter recipes based on search term
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (showForm) {
        return (
            <div className="recipes-form-container">
                <RecipeForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
            </div>
        );
    }

    return (
        <div className="recipes-container">
            <div className="recipes-controls">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="add-recipe-btn" onClick={() => setShowForm(true)}>
                    + Add New Recipe
                </button>
            </div>
            <div className="recipes-grid">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCards
                        key={index}
                        name={recipe.name}
                        cookTime={recipe.cookTime}
                        calories={recipe.calories}
                        ingredients={recipe.ingredients}
                        onDelete={() => handleDeleteRecipe(index)}
                        onAddToMealPlan={handleAddToMealPlan}
                    />
                ))}
            </div>
            
            <DaySelectionModal
                isOpen={showDayModal}
                onClose={handleCloseModal}
                onSelectDay={handleDaySelect}
                recipe={selectedRecipe}
            />
        </div>
    );
};

export default Recipes;
