import PageContent from '../components/PageContent';
import IngredientCard from '../components/IngredientCard';
import '../styles/ingredientcard.css';

const YourPantry = () => {
  const sampleIngredients = [
    {
      name: "Tomato",
      quantity: "3"
    },
    {
      name: "Orange",
      quantity: "6"
    },
    {
      name: "Radish",
      quantity: "7"
    }
  ];

  return (
    <PageContent>
      <div className="ingredients-grid">
        {sampleIngredients.map((ingredient, index) => (
          <IngredientCard
            key={index}
            name={ingredient.name}
            quantity={ingredient.quantity}
          />
        ))}
      </div>
    </PageContent>
  );
};

export default YourPantry;
