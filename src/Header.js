import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <nav className="header">

            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

                <Link to="/login" className="header__link">
                    <div className="header__item">
                        <span className="header__item__lineOne">Hello Ari</span>
                        <span className="header__item__lineTwo">Sign In</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className="header__item">
                        <span className="header__item__lineOne">Returns</span>
                        <span className="header__item__lineTwo">& Orders</span>
                    </div>
                </Link>

                <Link className="header__link">
                    <div className="header__item">
                        <span className="header__item__lineOne">Your</span>
                        <span className="header__item__lineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__basketItem">
                        <span>Cart</span>
                        <span className="header__item__lineTwo products__Count">22</span>
                    </div>

                </Link>
            </div>

        </nav>
    )
}

export default Header
