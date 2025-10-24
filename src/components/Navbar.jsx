import {Link} from "react-router-dom";

const Navbar = () => {
    const styles = {
        navbar: {
            backgroundColor: '#ffffff',
            width: '100%',
            height: '5rem',
            display: 'flex',
            alignItems: 'center'
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-around'
        },
        navList: {
            color: 'black',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            display: 'flex',
            alignItems: 'center',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0,
            width: '100%',
            justifyContent: 'space-around'
        },
        navLink: {
            textDecoration: 'none',
            color: 'inherit'
        },
        navLinkHover: {
            textDecoration: 'none'
        }
    };

    return(
        <div style={styles.navbar}>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li>
                        <Link to = "/" style={styles.navLink}>Little Helper</Link>
                    </li>
                    <li>
                        <Link to = "/meal-plan" style={styles.navLink}>Meal Plan</Link>
                    </li>
                    <li>
                        <Link to = "/pantry" style={styles.navLink}>Pantry</Link>
                    </li>
                    <li>
                        <Link to = "/recipes" style={styles.navLink}>Recipes</Link>
                    </li>
                    <li>
                        <Link to = "/grocery-list" style={styles.navLink}>Grocery List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;