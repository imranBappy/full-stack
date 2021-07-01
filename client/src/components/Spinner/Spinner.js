import React from 'react';
import './Spinner.css';
const Spinner = () => {
    return (
        <div>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Spinner;