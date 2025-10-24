import "../styles/Navbar.css"

import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to = "/">Little Helper</Link>
                    </li>
                    <li>
                        <Link to = "/meal-plan">Meal Plan</Link>
                    </li>
                    <li>
                        <Link to = "/pantry">Pantry</Link>
                    </li>
                    <li>
                        <Link to = "/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link to = "/grocery-list">Grocery List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;