import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [pantryItems, setPantryItems] = useState(() => {
    const saved = localStorage.getItem('pantryItems');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Tomato", quantity: 3 },
      { id: 2, name: "Orange", quantity: 6 },
      { id: 3, name: "Radish", quantity: 7 }
    ];
  });

  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('recipes');
    return saved ? JSON.parse(saved) : [
      { 
        id: 1, 
        name: "Spaghetti Carbonara", 
        cookTime: "20 mins", 
        calories: "520 calories",
        ingredients: ["Pasta", "Eggs", "Bacon", "Parmesan", "Black Pepper"]
      },
      { 
        id: 2, 
        name: "Chicken Stir Fry", 
        cookTime: "15 mins", 
        calories: "320 calories",
        ingredients: ["Chicken", "Soy Sauce", "Vegetables", "Garlic", "Ginger"]
      },
      { 
        id: 3, 
        name: "Chocolate Chip Cookies", 
        cookTime: "30 mins", 
        calories: "180 calories",
        ingredients: ["Flour", "Butter", "Sugar", "Eggs", "Chocolate Chips"]
      },
      { 
        id: 4, 
        name: "Caesar Salad", 
        cookTime: "10 mins", 
        calories: "220 calories",
        ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"]
      },
      { 
        id: 5, 
        name: "Grilled Cheese Sandwich", 
        cookTime: "8 mins", 
        calories: "380 calories",
        ingredients: ["Bread", "Cheese", "Butter"]
      }
    ];
  });

  const [groceryList, setGroceryList] = useState(() => {
    const saved = localStorage.getItem('groceryList');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: "Onion", quantity: 3, purchased: false },
      { id: 2, name: "Avocado", quantity: 6, purchased: false },
      { id: 3, name: "Radish", quantity: 7, purchased: false }
    ];
  });

  const [mealPlan, setMealPlan] = useState(() => {
    const saved = localStorage.getItem('mealPlan');
    return saved ? JSON.parse(saved) : {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    };
  });

  useEffect(() => {
    localStorage.setItem('pantryItems', JSON.stringify(pantryItems));
  }, [pantryItems]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
  }, [groceryList]);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  const addPantryItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity)
    };
    setPantryItems([...pantryItems, newItem]);
  };

  const removePantryItem = (id) => {
    setPantryItems(pantryItems.filter(item => item.id !== id));
  };

  const updatePantryItem = (id, quantity) => {
    setPantryItems(pantryItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };

  const addRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: Date.now()
    };
    setRecipes([...recipes, newRecipe]);
  };

  const addGroceryItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity),
      purchased: false
    };
    setGroceryList([...groceryList, newItem]);
  };

  const removeGroceryItem = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
  };

  const toggleGroceryPurchased = (id) => {
    setGroceryList(groceryList.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  const addRecipeToMealPlan = (day, recipeId) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe && !mealPlan[day].some(r => r.id === recipeId)) {
      setMealPlan({
        ...mealPlan,
        [day]: [...mealPlan[day], recipe]
      });
    }
  };

  const removeRecipeFromMealPlan = (day, recipeId) => {
    setMealPlan({
      ...mealPlan,
      [day]: mealPlan[day].filter(recipe => recipe.id !== recipeId)
    });
  };

  const value = {
    pantryItems,
    addPantryItem,
    removePantryItem,
    updatePantryItem,
    recipes,
    addRecipe,
    groceryList,
    addGroceryItem,
    removeGroceryItem,
    toggleGroceryPurchased,
    mealPlan,
    addRecipeToMealPlan,
    removeRecipeFromMealPlan
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

