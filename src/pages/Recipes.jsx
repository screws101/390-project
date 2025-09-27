import PageContent from '../components/PageContent';
import RecipeCard from '../components/RecipeCard';
import '../styles/recipecard.css';

const Recipes = () => {
  const sampleRecipes = [
    {
      name: "Spaghetti Carbonara",
      cookTime: "20 mins",
      calories: "520 calories"
    },
    {
      name: "Chicken Stir Fry",
      cookTime: "15 mins",
      calories: "320 calories"
    },
    {
      name: "Chocolate Chip Cookies",
      cookTime: "30 mins",
      calories: "180 calories"
    }
  ];

  return (
    <PageContent>
      <div className="recipes-grid">
        {sampleRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            name={recipe.name}
            cookTime={recipe.cookTime}
            calories={recipe.calories}
          />
        ))}
      </div>
    </PageContent>
  );
};

export default Recipes;
