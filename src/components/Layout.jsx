import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const Layout = () => {
  const location = useLocation();
  
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Meal Plan';
      case '/pantry':
        return 'Your Pantry';
      case '/recipes':
        return 'Recipes';
      case '/grocery-list':
        return 'Grocery List';
      default:
        return 'Page';
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Header pageTitle={getPageTitle(location.pathname)} />
      <Outlet />
    </div>
  );
};

export default Layout;
