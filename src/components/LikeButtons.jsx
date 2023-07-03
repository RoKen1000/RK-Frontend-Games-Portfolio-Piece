import { useState } from "react"
import { patchVotes } from "../api"

export const LikeButtons = ({setVotes, votes, review_id, originalVoteCount}) => {

    const [error, setError] = useState(false)

    const handleVote = (increment) => {
        setVotes(votes + increment)
        patchVotes(increment, review_id)
        .then((incrementedVotes) => {
            setVotes(incrementedVotes)
        })
        .catch((error) => {
            setVotes(votes)
            setError(true)
        })
    }

    if(error) return <h2 className="error-message">Something went wrong. Try again later.</h2>

    return(
        <div>
                <button onClick={() => handleVote(1)} disabled={votes > originalVoteCount}>👍</button>
                <button onClick={() => handleVote(-1)} disabled={votes < originalVoteCount}>👎</button>
        </div>
    )
}