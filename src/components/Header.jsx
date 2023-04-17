import logo from "../images/logo.png"
import { LoggedInUser } from "./LoggedInUser"
import { NavBar } from "./NavBar"
import { useState } from "react"


export const Header = () => {

    const [user, setUser] = useState("tickle122")

    return(
        <div className="header">
            <img src={logo} alt="website-logo" className="logo" />
            
            <NavBar />
            <LoggedInUser user={user}/>
        </div>
    )
}