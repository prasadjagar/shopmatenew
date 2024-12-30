import { Link, NavLink } from "react-router-dom";
import Logo from "./logo512.png"
import "./Header.css"
export const Header=()=>{
    return(
        <header>
            <Link to="/" className="logo">
                <img className="" src={Logo} alt=""/>
                <span>Shopping Cart</span>
            </Link>
            <nav className="navigation">
                <NavLink to="/" className="link">Home</NavLink>
                <NavLink to="/Cart" className="link">Cart</NavLink>
            </nav>
            <Link to="/Cart" className="items">
                <span> Cart: 2</span>
            </Link>
        </header>
    )
}