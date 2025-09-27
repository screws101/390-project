import GroceryCard from '../components/GroceryCard';
import PageContent from '../components/PageContent';
import '../styles/grocerycard.css';

const GroceryList = () => {
  const sampleIngredients = [
    {
      name: "Onion",
      quantity: "3"
    },
    {
      name: "Avocado",
      quantity: "6"
    },
    {
      name: "Radish",
      quantity: "7"
    }
  ];

  return (
    <PageContent>
      <div className="grocery-grid">
        {sampleIngredients.map((grocery, index) => (
          <GroceryCard
            key={index}
            name={grocery.name}
            quantity={grocery.quantity}
          />
        ))}
      </div>
    </PageContent>
  );
};

export default GroceryList;

