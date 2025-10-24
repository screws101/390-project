// DaySelectionModal component modal for selecting which day to add a recipe to in the meal plan
// Used in Recipes page when adding a recipe to the meal plan
import { useState } from 'react';

const DaySelectionModal = ({ isOpen, onClose, onSelectDay, recipe }) => {
    const [selectedDay, setSelectedDay] = useState('');

    // Array of days of the week for the dropdown selection
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Handle day selection from dropdown menu
    const handleDaySelect = (day) => {
        setSelectedDay(day);
    };

    // Handle confirming the day selection and adding recipe to the meal plan
    const handleConfirm = () => {
        if (selectedDay) {
            onSelectDay(selectedDay, recipe);
            onClose();
            setSelectedDay('');
        }
    };

    // Don't render modal if it's not open
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Display the recipe name being added */}
                <h3>Add "{recipe?.name}" to Meal Plan</h3>
                <p>Select a day of the week:</p>
                
                {/* Day selection dropdown */}
                <div className="day-selector">
                    <select 
                        value={selectedDay} 
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="day-dropdown"
                    >
                        <option value="">Choose a day...</option>
                        {daysOfWeek.map((day) => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Modal action buttons */}
                <div className="modal-buttons">
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>
                    <button 
                        className="confirm-btn" 
                        onClick={handleConfirm}
                        disabled={!selectedDay}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DaySelectionModal;
