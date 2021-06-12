import React from 'react';
import './LiveGame.css';

const LiveGame = () => {

    const open = (e) =>{
        if (e.target.className.length > 9) {
            e.target.className = 'accordion'
            e.target.nextElementSibling.style = 'max-height:0'
        }else{
            e.target.className = 'accordion active'
            e.target.nextElementSibling.style = 'max-height:500px'
        }
    }

    

    return (
        <div className='container'>

            <div>
                <button onClick={open} className="accordion">Section 1</button>
                <div className="panel" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>

                <button onClick={open} className="accordion">Section 1</button>
                <div className="panel" >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
            </div>

            
        </div>
    );
};

export default LiveGame;