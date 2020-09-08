import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './StateProvider';

function Header() {
    const[{basket}]=useStateValue();

    console.log(basket)
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

                <Link to="/checkout" className="header__link">
                    <div className="header__basketItem">
                        <span>Cart</span>
                        <span className="header__item__lineTwo products__Count">{basket?.length}</span>
                    </div>

                </Link>
            </div>

        </nav>
    )
}

export default Header
