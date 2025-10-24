import { useState } from 'react';

const DaySelectionModal = ({ isOpen, onClose, onSelectDay, recipe }) => {
    const [selectedDay, setSelectedDay] = useState('');

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const handleDaySelect = (day) => {
        setSelectedDay(day);
    };

    const handleConfirm = () => {
        if (selectedDay) {
            onSelectDay(selectedDay, recipe);
            onClose();
            setSelectedDay('');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Add "{recipe?.name}" to Meal Plan</h3>
                <p>Select a day of the week:</p>
                
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
