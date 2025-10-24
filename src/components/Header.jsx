import '../styles/Header.css';

const Header = ({ pageTitle = "Page Title" }) => {
    return(
        <header className="page-header">
            <h1 className="page-title">{pageTitle}</h1>
        </header>
    );
}

export default Header;