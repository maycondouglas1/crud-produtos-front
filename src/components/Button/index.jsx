import React from 'react';
import "./styles.css";

const Button = ({ onClick, children }) => {
    return (
        <div className="button-container">
            <button type="submit" onClick={onClick}>{children}</button>
        </div>
    );
}
 
export default Button;