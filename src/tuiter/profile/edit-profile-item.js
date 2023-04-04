import React from 'react';
import './index.css';
const EditProfileInputComponent = ({ handleInputChange, value, label, inputType = "text" }) => {
    return (
        <div className="wd-profile-input-container">
            <div className="wd-profile-input-label ">
                <label>
                    {label}
                </label>
            </div>
            <input
                type={inputType}
                value={value}
                onChange={handleInputChange}
                className="wd-profile-input">
            </input>
        </div>
    )
}

export default EditProfileInputComponent;