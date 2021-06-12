/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { logoutAction } from '../../store/actions/authAction';
import Alert from '../Alert/Alert';
import './media.css';
import './Navbar.css';
const Navbar = (props) => {
    const {alert, auth} = props;
    const [style, setStyle] = useState({
        position: 'absolute',
        top: '-100px',
        check: false
    })

    const handleClick = () =>{
        if (style.check) {
            setStyle({
                position: 'absolute',
                top: '-100px',
                transition: '0.5s',
                background: '#fff',
                check: false
            })
        }else{
            setStyle({
                position: 'absolute',
                top: '100px',
                transition: '0.5s',
                background: '#fff',
                check: true
            })
        }

    }
    const [time, setTime] = useState()
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[])

    const logoutHandler = () =>{
        props.logoutAction()
    }
    return (
        <>
         <header style={{background:'#fff'}}>
             <div className="header">
            <nav>
                <div className="container">
                    <div className="time">
                        <h3 style={{height: 5 , marginTop:8, fontSize:17, textAlign: 'left'}}>{time? time : ''}</h3>
                        <p style={{textAlign:'left'}} >{new Date().toLocaleDateString()}</p>
                    </div>
                    <div className="link-aria">
                        <a href="/">
                            <img src={logo} alt="icon"/>
                        </a>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to={auth.isAuthenticated ? '/dashboard' : '/login'}>
                                {auth.isAuthenticated ? 'Dashboard' : 'Login'}
                            </Link>
                            </li>
                            <li><Link to="/register">Signup</Link></li>
                             
                        </ul>
                    </div>
                    <div className="icon-aria">
                        <Link to="/">
                            <div className="icon">
                                <img onClick={handleClick} src="https://img.icons8.com/android/24/000000/menu.png"/>
                            </div>
                            <img src={logo} alt="icon"/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        {
             auth.isAuthenticated ? 
             <div className="login-aria">
                <div><Link to="/login">Deposit</Link></div>
                <div><Link to="/register">Balance: {auth.user.balance}</Link></div>
            </div>
            :
            <div className="login-aria">
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/register">Register</Link></div>
            </div>
         }
        
        
         </header>
         
         <div className="menu" style={style} >
            <ul >
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to={auth.isAuthenticated ? '/dashboard' : '/login'}>
                        {auth.isAuthenticated ? 'Dashboard' : 'Login'}
                    </Link>
                </li>
                <li>
                    <Link onClick={ auth.isAuthenticated ? logoutHandler: ()=> 200 } to={auth.isAuthenticated ? '/' : '/register'}>
                        {auth.isAuthenticated ? 'Logout' : 'Register'}
                    </Link>
                </li>
            </ul>
        </div>
        {
            alert.message  && <div className='container'><Alert/></div>
        }  
        </>
    );
};

const mapStateToProps = state =>({
    alert: state.alert,
    auth: state.auth
})

export default connect(mapStateToProps, {logoutAction })(Navbar);