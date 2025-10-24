import IncDecBtn from './IncDecBtn';
import '../styles/GroceryCards.css';

const GroceryCard = ({ name, quantity, onQuantityChange }) => {
    return (
        <div className="grocery-card">
            <div className="grocery-content">
                <h3 className="grocery-name">{name}</h3>
            </div>
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