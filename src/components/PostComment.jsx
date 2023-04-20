import { useState } from "react"
import { postComment } from "../api"

export const PostComment = ({comments, setComments, review_id, user}) => {

    const [showCommentBox, setShowCommentBox] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [isCommentPosting, setIsCommentPosting] = useState(false)
    const [commentPostError, setCommentPostError] = useState(false)

    const handleCommentPost = (e) => {
        e.preventDefault()
        setIsCommentPosting(true)  
        postComment(review_id, user, commentText)
        .then((newComment) => {
            setIsCommentPosting(false)
            setShowCommentBox(false)
            setComments([newComment, ...comments])
        })
        .catch((error) => {
            setIsCommentPosting(false)
            setCommentPostError(true)
        })
    }

    return(
        <div className="post-comment-container">
            <button className="post-comment-button" onClick={() => setShowCommentBox(true)}>Post A Comment</button>
            {showCommentBox === true ?
                <form className="post-comment-form" onSubmit={handleCommentPost}>
                    <label htmlFor="comment-body" >Enter Comment: </label><br></br>
                    <input className="post-comment-form" type="text" value={commentText} id="comment-body" required onChange={(e) => setCommentText(e.target.value)}></input><br></br>
                    <button id="comment-body" type="submit" disabled={isCommentPosting === true} onClick={() => setCommentPostError(false)}>Post Comment</button>
                </form> 
                : null}
            {isCommentPosting ? <h1>Posting Comment...</h1> : null}
            {commentPostError ? <h1 className="post-comment-error-message">Something went wrong. Comment post failed.</h1> : null}
        </div>
    )
}