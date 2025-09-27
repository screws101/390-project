import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MealPlan from './pages/MealPlan';
import YourPantry from './pages/YourPantry';
import Recipes from './pages/Recipes';
import GroceryList from './pages/GroceryList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MealPlan />} />
          <Route path="pantry" element={<YourPantry />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="grocery-list" element={<GroceryList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;

