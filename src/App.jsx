import './App.css';
import { Outlet, useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import MealPlan from './components/MealPlan';
import Pantry from './pages/Pantry';
import Recipes from './pages/Recipes';
import GroceryList from './pages/GroceryList';

const App = () => {
  const location = useLocation();
  
  const getPageTitle = (pathname) => {
    switch (pathname) {
    case '/meal-plan':
        return 'Meal Plan';
      case '/pantry':
        return 'Your Pantry';
      case '/recipes':
        // Check if we're showing the add recipe form
        return window.location.hash === '#add-recipe' ? 'Add a new recipe' : 'Recipes';
      case '/grocery-list':
        return 'Grocery List';
      default:
        return 'Little Helper';
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Header pageTitle={getPageTitle(location.pathname)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal-plan" element={<MealPlan />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/grocery-list" element={<GroceryList />} />
      </Routes>
    </div>
  );
};

export default App;