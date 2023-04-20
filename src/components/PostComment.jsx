import { useState } from "react"
import { postComment } from "../api"
import "../styles/PostComment.css"

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
            setCommentText("")
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
                <form onSubmit={handleCommentPost} className="post-comment-form">
                    <label htmlFor="comment-body" >Enter Comment: </label><br></br>
                    <textarea type="text" value={commentText} id="post-comment-body" required onChange={(e) => setCommentText(e.target.value)}></textarea><br></br>
                    <button type="submit" disabled={isCommentPosting === true} onClick={() => setCommentPostError(false)} className="post-comment-submit-button">Submit</button>
                </form> 
                : null}
            {isCommentPosting ? <h1>Posting Comment...</h1> : null}
            {commentPostError ? <h1 className="post-comment-error-message">Something went wrong. Comment post failed.</h1> : null}
        </div>
    )
}