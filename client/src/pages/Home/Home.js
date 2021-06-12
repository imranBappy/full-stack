import React from 'react';
import LiveEffect from '../../components/LiveEffect/LiveEffect';
import LiveGame from '../../components/LiveGame/LiveGame';
import Navbar from '../../components/Navbar/Navbar';
import News from '../../components/News/News';
import './home.css';
const Home = () => {
    return (
        <>
                <Navbar/>
                <div className="home">
                    <div className='home-controller'>
                        <News/>
                        <LiveEffect/>
                        <LiveGame/>
                    </div>
                </div>
        </>
    );
};

export default Home;
