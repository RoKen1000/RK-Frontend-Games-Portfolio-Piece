
import { patchVotes } from "../api"

export const LikeButtons = ({setVotes, votes, review_id, setError, originalVoteCount}) => {

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

    return(
        <div>
            <button onClick={() => handleVote(1)} disabled={votes !== originalVoteCount}>👍</button>
            <button onClick={() => handleVote(-1)} disabled={votes !== originalVoteCount}>👎</button>
        </div>
    )
}