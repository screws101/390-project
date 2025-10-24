// Header component displays the current page title dynamically
import '../styles/Header.css';

const Header = ({ pageTitle = "Page Title" }) => {
    return(
        <header className="page-header">
            {/* Displays the title passed from the parent component */}
            <h1 className="page-title">{pageTitle}</h1>
        </header>
    );
}

export default Header;