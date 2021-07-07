import React from 'react';
import './ScrollBar.css';
import {Link} from 'react-router-dom';
const ScrollBar = (props) => {
    return (
       <div className="container">
            <div className="scroll-bar">
            <ul>
                {
                    props.data.map((i, n)=><li key={i.path+n}>
                            
                                <Link to={i.path}>
                                <button>{i.name}</button>
                                </Link>
                        </li>
                    )
                }
            </ul>
        </div>
       </div>
    );
};

export default ScrollBar;