import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import {useHistory} from 'react-router';

const Header = () => {


    const history = useHistory();
    const handleSignUpBtn = () =>{
        history.push('/signin');
    }

    return (
        <div className="nav-bar-body">
            
            <div>
            <NavLink className="nav-bar" to='/home'>HOME</NavLink>
            <NavLink className="nav-bar" to='/about'>ABOUT</NavLink>
            <NavLink className="nav-bar" to='/service'>SERVICES</NavLink>
            <NavLink className="nav-bar" to='/contact'>CONTACT</NavLink>
            </div>
            <div className="sign-up">
                <button onClick={handleSignUpBtn} className="home-btn">Register</button>
            </div>
            <div className="login">
                <button onClick={handleSignUpBtn} className="home-btn">Sign In</button>
            </div>
            <div className='nav-img'>
                <img src="https://i.pinimg.com/originals/8c/c9/eb/8cc9eb9a7f5bd6b775e1501407cc4dc7.jpg" alt="" />
            </div>
        </div>
    );
};

export default Header;