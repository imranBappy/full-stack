import React from 'react';
import './LiveEffect.css';

const LiveEffect = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <span className='live-text' >Live</span>
                    {/* <h1>Live Effect</h1> */}
                    <span className='live-effect' ></span>
                </div>
            </div>
        </div>
    );
};

export default LiveEffect;