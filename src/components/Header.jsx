import logo from "../images/logo.png"
import { LoggedInUser } from "./LoggedInUser"
import { NavBar } from "./NavBar"



export const Header = ({user}) => {

    return(
        <header>
            <div className="page-title">
                <h1>NC Games</h1>
            </div>
            <div className="header">
                <img src={logo} alt="website-logo" className="logo" />
                <LoggedInUser user={user}/>
                <NavBar />
            </div>
        </header>
    )
}