// GroceryCard component displays grocery items with changeable quantity
import IncDecBtn from './IncDecBtn';
import '../styles/GroceryCards.css';

const GroceryCard = ({ name, quantity, onQuantityChange }) => {
    return (
        <div className="grocery-card">
            {/* Display grocery item name */}
            <div className="grocery-content">
                <h3 className="grocery-name">{name}</h3>
            </div>
            
            {/* Quantity increase/decrease buttons */}
            <div className="grocery-card-inc-dec-btn">
                <IncDecBtn 
                    initialValue={quantity}
                    onValueChange={onQuantityChange}
                />
            </div>
        </div>
    );
};

export default GroceryCard;