import { useState, useEffect } from "react";
import "../styles/IncDecBtn.css";

const IncDecBtn = ({minValue = 0, maxValue = 100, initialValue = 0, onValueChange}) => {
    const [count, setCount] = useState(initialValue);

    // Update count when initialValue changes
    useEffect(() => {
        setCount(initialValue);
    }, [initialValue]);

    //handler function increases count by 1
    const handleIncreaseCounter = () => {
        if(count < maxValue) {
            const newCount = count + 1;
            setCount(newCount);
            if(onValueChange) {
                onValueChange(newCount);
            }
        }
    };

    //handler function decreases count by 1
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
            <div className="increase-btn" onClick={handleIncreaseCounter}>
                <span class="material-symbols-outlined">add</span>
            </div>

            <p>{count}</p>

            <div className="decrease-btn" onClick={handleDecreaseCounter}>
                <span class="material-symbols-outlined">remove</span>
            </div>            
        </div>
    );
}

export default IncDecBtn;