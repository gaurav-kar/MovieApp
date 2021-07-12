import React, { useContext } from "react";

import { Link } from "react-router-dom";
import "./NavBarUI.css";
import { AuthContext } from "../../context/auth-context";

const NavBarUI = (props) => {
  const auth = useContext(AuthContext);

  const onLogoutHandler = () => {
    auth.logout();
  };

  const onChangeHandler = (e) => {
    if (e.key === "Enter") {
      props.change(e.target.value);
    }
  };

  return (
    <div className='navigation_bar__items'>
      <div className='navigation_bar__left'>
        <h2>
          <Link to='/'>Movie Wiki</Link>
        </h2>
      </div>
      <div className='navigation_bar__right'>
        <div className='navigation_bar__search'>
          <input type='text' placeholder='Search Movie' onKeyDown={onChangeHandler} />
        </div>

        {auth.isLoggedIn && (
          <div className='navigation_bar__favourites'>
            <Link to='/user/favourites'>
              <button className='navigation_bar__btn'>Favourites</button>
            </Link>
          </div>
        )}
        {!auth.isLoggedIn && (
          <div className='navigation_bar__login'>
            <Link to='/login'>
              <button className='navigation_bar__btn'>Login</button>
            </Link>
          </div>
        )}
        {auth.isLoggedIn && (
          <div className='navigation_bar__logout'>
            <button className='navigation_bar__btn' onClick={onLogoutHandler}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarUI;
