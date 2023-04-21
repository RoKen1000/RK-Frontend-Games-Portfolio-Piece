import {NavLink} from "react-router-dom"

export const NavBar = () => {
    return(
        <nav className="navbar-links">
            <NavLink to="/reviews">All Reviews</NavLink>
            <NavLink to="/categories">Categories</NavLink>
        </nav>
    )
}