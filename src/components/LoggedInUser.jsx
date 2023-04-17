import { useState } from "react"
import { fetchUserAvatar } from "../api"

export const LoggedInUser = ({user}) => {
    return(
        <div>
            <img src="https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953" alt="user-avatar" className="user-avatar"/>
            <p className="login-reminder"><strong>Logged in as: {user}</strong></p>
        </div>
    )
}