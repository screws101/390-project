import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="brand-logo">Little Helper</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Meal Plan</Link>
                    <Link to="/pantry" className="nav-link">Your Pantry</Link>
                    <Link to="/recipes" className="nav-link">Recipes</Link>
                </div>
                <div className="navbar-actions">
                    <Link to="/grocery-list" className="btn-navbar">Grocery List</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
