import logo from "../images/logo.png"
import "../styles/LandingPage.css"
import { LoggedInUser } from "./LoggedInUser"
import { Link} from "react-router-dom"

export const LandingPage = ({user}) => {

    return(
        <main>
            <h1 className="landing-page-welcome">Welcome to NC Games!</h1>
            <h2 className="landing-page-welcome">The Central Hub for All Board Game Reviews</h2>
            <div className="landing-page-container">
                <img src={logo} alt="website-logo" className="landing-page-logo"/>
                <div className="landing-page-links">
                    <Link to="/reviews">All Reviews</Link>
                    <Link to="/categories">Categories</Link>
                </div>
                <LoggedInUser user={user}/>
            </div>
        </main>
    )
}