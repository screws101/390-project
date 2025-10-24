// IngredientCard component displays pantry ingredients with quantity
import IncDecBtn from "./IncDecBtn"
import "../styles/IngredientCard.css"

const IngredientCard = ({ name, quantity, onQuantityChange }) => {
    return (
        <div className="ingredient-card">
            {/* Display ingredient name */}
            <div className="ingredient-content">
                <h3 className="ingredient-name">{name}</h3>
            </div>
            
            {/* Quantity increase/decrease buttons for adjusting ingredient amounts */}
            <div className="ingredient-card-inc-dec-btn">
                <IncDecBtn 
                    initialValue={quantity}
                    onValueChange={onQuantityChange}
                />
            </div>
        </div>
    );
};

export default IngredientCard;