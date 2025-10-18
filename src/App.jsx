import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import MealPlan from './pages/MealPlan';
import YourPantry from './pages/YourPantry';
import Recipes from './pages/Recipes';
import GroceryList from './pages/GroceryList';

function App() {
  const basename = import.meta.env.BASE_URL;
  
  return (
    <AppProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MealPlan />} />
            <Route path="pantry" element={<YourPantry />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="grocery-list" element={<GroceryList />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App;

