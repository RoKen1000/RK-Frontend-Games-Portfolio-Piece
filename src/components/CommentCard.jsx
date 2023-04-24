import "../styles/CommentCard.css"
import { DeleteComment } from "./DeleteComment"
import { useState } from "react"

export const CommentCard = ({votes, author, body, comment_date, review_id, user, comment_id}) => {

    const [successfulDelete, setSuccessfulDelete] = useState(false)

    if(successfulDelete) return <h1 className="comment-deleted-card">Comment Deleted</h1>

    return(
        <div className="comment-card">
            <h1 className="comment-posted-by"><strong>Posted By: {author}</strong></h1>
            <p><strong>Posted:</strong> {comment_date.slice(0, 10)}</p>
            <p className="comment-body">{body}</p>
            <p><strong>Votes: {votes}</strong></p>
            {user === author ?
                <DeleteComment comment_id={comment_id} setSuccessfulDelete={setSuccessfulDelete}/> 
                : null}
        </div>
    )
} 