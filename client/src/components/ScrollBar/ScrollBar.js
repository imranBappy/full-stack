import React from 'react';
import './ScrollBar.css';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
const ScrollBar = (props) => {
    const location = useLocation();
    return (
       <div className="container">
            <div className="scroll-bar">
            <ul>
                {
                    props.data.map((i, n)=>{
                        const path = i.path.split('?')
                        return(
                            <li key={i.path+n}>
                                <Link to={i.path}>
                                    <button
                                        style={location.pathname === path[0] ? {background:'orangered'}: {background:'white'}}
                                    >{i.name}</button>
                                </Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
       </div>
    );
};

export default ScrollBar;