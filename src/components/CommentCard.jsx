import "../styles/CommentCard.css"

export const CommentCard = ({votes, author, body, comment_date, review_id, user}) => {

    return(
        <div className="comment-card">
            <h1><strong>Posted By: {author}</strong></h1>
            <p><strong>Posted:</strong> {comment_date.slice(0, 10)}</p>
            <p className="comment-body">{body}</p>
            <p><strong>Votes: {votes}</strong></p>
            {user === author ? <button className="comment-delete-button">Delete Comment</button> : null}
        </div>
    )
} 