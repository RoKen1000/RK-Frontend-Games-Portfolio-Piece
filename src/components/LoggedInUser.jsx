import { useLocation } from "react-router-dom"

export const LoggedInUser = ({user}) => {

    const location = useLocation()

    return(
        <div className={location.pathname !== "/" ? "user-profile" : "landing-page-profile"}>
            <img src="https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953" alt="user-avatar" className="user-avatar"/>
            <p className="user-logged-in"><strong>Logged in as: {user}</strong></p>
        </div>
    )
}