// IncDecBtn component reusable increment/decrement button component used for quantity tracking
import { useState, useEffect } from "react";
import "../styles/IncDecBtn.css";

const IncDecBtn = ({minValue = 0, maxValue = 100, initialValue = 0, onValueChange}) => {
    const [count, setCount] = useState(initialValue);

    // Update count when initialValue changes from parent component
    useEffect(() => {
        setCount(initialValue);
    }, [initialValue]);

    // Handler function increases count by 1 within max limit
    const handleIncreaseCounter = () => {
        if(count < maxValue) {
            const newCount = count + 1;
            setCount(newCount);
            if(onValueChange) {
                onValueChange(newCount);
            }
        }
    };

    // Handler function decreases count by 1 within min limit
    const handleDecreaseCounter = () => {
        if(count > minValue) {
            const newCount = count - 1;
            setCount(newCount);
            if(onValueChange) {
                onValueChange(newCount);
            }
        }
    }

    return(
        <div className="inc-dec-btn-group">
            {/* Increase button with plus icon */}
            <div className="increase-btn" onClick={handleIncreaseCounter}>
                <span class="material-symbols-outlined">add</span>
            </div>

            {/* Current count display */}
            <p>{count}</p>

            {/* Decrease button with minus icon */}
            <div className="decrease-btn" onClick={handleDecreaseCounter}>
                <span class="material-symbols-outlined">remove</span>
            </div>            
        </div>
    );
}

export default IncDecBtn;