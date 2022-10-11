import React from "react";
import "./input.scss";

function Input({
    type,
    placeholder,
    state,
    handleState,
    regex = "",
    errorMessage = "skerrit",
    validate,
}) {
    const handleChange = (e) => {
        handleState({ ...state, value: e.target.value });
    };

    const handleValidate = () => {
        if (regex) {
            if (regex.test(state.value)) {
                handleState({ ...state, valid: true });
            } else {
                handleState({ ...state, valid: false });
            }
        }
    };
    return (
        <div className="input-container">
            <input
                className="input"
                type={type}
                placeholder={placeholder}
                value={state.value}
                onChange={handleChange}
                onKeyUp={handleValidate}
                onBlur={handleValidate}
            />
            {!validate && state.value !== "" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
}

export default Input;
