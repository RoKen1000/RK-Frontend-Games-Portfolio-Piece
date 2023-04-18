import { useEffect, useState } from "react"
import { fetchReviewComments } from "../api"
import { CommentCard } from "./CommentCard"
import "../styles/CommentContainer.css"

export const CommentsContainer = ({review_id, user}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchReviewComments(review_id)
        .then((retrievedComments) => {
            setComments(retrievedComments)
        })
    }, [])

    return(
        <div className="comments-container">
            {comments.map((comment) => {
                return <CommentCard 
                    key={comment.comment_id}
                    votes={comment.votes}
                    author={comment.author}
                    body={comment.body}
                    comment_date={comment.created_at}
                    review_id={comment.review_id}
                    user={user}
                />
            })}
        </div>
    )
}