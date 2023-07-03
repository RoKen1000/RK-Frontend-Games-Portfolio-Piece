import { useEffect, useState } from "react"
import { fetchReviewComments } from "../api"
import { CommentCard } from "./CommentCard"
import "../styles/CommentContainer.css"
import { PostComment } from "./PostComment"

export const CommentsContainer = ({review_id, user}) => {

    const [comments, setComments] = useState([])
    const [commentsLoading, setCommentsLoading] = useState(false)

    useEffect(() => {
        setCommentsLoading(true)
        fetchReviewComments(review_id)
        .then((retrievedComments) => {
            setCommentsLoading(false)
            setComments(retrievedComments)
        })
    }, [])

    if(commentsLoading) return <h1 className="comments-loading-message">Comments Loading...</h1>

    return(
        <div className="comments-container">
            <PostComment 
                comments={comments} 
                setComments={setComments}
                review_id={review_id}
                user={user}/>
            {!comments.length ? <h1 className="no-comments-message">No Comments</h1> : null}
            {comments.map((comment) => {
                return <CommentCard 
                    key={comment.comment_id}
                    votes={comment.votes}
                    author={comment.author}
                    body={comment.body}
                    comment_date={comment.created_at}
                    review_id={comment.review_id}
                    user={user}
                    comment_id={comment.comment_id}
                />
            })}
        </div>
    )
}