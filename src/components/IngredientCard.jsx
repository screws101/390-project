import IncDecBtn from "./IncDecBtn"
import "../styles/IngredientCard.css"

const IngredientCard = ({ name, quantity, onQuantityChange }) => {
    return (
        <div className="ingredient-card">
            <div className="ingredient-content">
                <h3 className="ingredient-name">{name}</h3>
            </div>
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