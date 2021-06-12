/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import './News.css';
const News = () => {
    return (
        <>
        <div >
            <div className="container x">
                <div className="news">
                    <div className="left">
                        <h3>{'news'.toLocaleUpperCase()}</h3>
                    </div>
                    <div className="right">
                        <marquee direction="left">
                            This is head line
                        </marquee>
                    </div>
                </div>
            </div>
         </div>
        </>
    );
};

export default News;