/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { logoutAction } from '../../store/actions/authAction';
import Alert from '../Alert/Alert';
import { ModalContext } from '../Layout/Layout';
import './media.css';
import './Navbar.css';
const Navbar = (props) => {
    const {alert, auth} = props;
    const [menu, setMenu] = useState(false)
    const [, setOpen] = useContext(ModalContext)

    const handleClick = () =>{
        setMenu(!menu)
    }
    const [time, setTime] = useState()
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[]);

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
                        <li><Link to="/statement">Statement</Link></li>
                        <li onclick={()=>{setOpen({display: 'block', component:'Withdraw'})}}><Link to="/">Withdraw</Link></li>
                        <li><Link to="/setting">Setting</Link></li>
                            <li>
                                <Link to={auth.isAuthenticated ? '/dashboard' : '/login'}>
                                {auth.isAuthenticated ? 'Dashboard' : 'Login'}
                                </Link>
                            </li>
                            <li><Link to="/register">Signup</Link></li>
                        </ul>
                    </div>
                    <div className="icon-aria">
                            <div className="icon">
                                <img onClick={handleClick} src="https://img.icons8.com/android/24/000000/menu.png"/>
                            </div>
                        <Link to="/">
                            <img src={logo} alt="icon"/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        {
             auth.isAuthenticated ? 
             <div className="login-aria">
                <div><button onClick={()=> setOpen({display: 'block', component:'deposit'})} >Deposit</button></div>
                <div><button >Balance: {auth.user.balance}</button></div>
            </div>
            :
            <div className="login-aria">
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/register">Register</Link></div>
            </div>
         }
         </header>
         {
             menu ? 
         
         <div className="menu" >
            <ul>
                {
                    auth.isAuthenticated ?<>
                    <li><Link to="/statement">Statement</Link></li>
                    <li name="Withdraw">
                        <Link name="Withdraw" to="/">Withdraw</Link>
                    </li>
                    <li><Link to="/setting">Setting</Link></li>
                    </> : <>
                    <li>
                        <Link  to={'/register'}>
                            {'Register'}
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'}>
                            {'Login'}
                        </Link>
                    </li>
                    </>
                }
            </ul>
        </div>: ''
        }
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