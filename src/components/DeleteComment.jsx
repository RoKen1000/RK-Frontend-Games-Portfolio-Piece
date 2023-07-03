import { useState } from "react"
import { deleteComment } from "../api"

export const DeleteComment = ({comment_id, setSuccessfulDelete}) => {

    const [isDeleting, setIsDeleting] = useState(false)
    const [errorDeleting, setErrorDeleting] = useState(false)

    const handleDelete = () => {
        setIsDeleting(true)
        setErrorDeleting(false)
        deleteComment(comment_id)
        .then((responseStatus) => {
            setIsDeleting(false)
            setSuccessfulDelete(true)
        })
        .catch(() => {
            setIsDeleting(false)
            setErrorDeleting(true)
        })
    }

    if(isDeleting) return <p className="comment-deleting-message">Deleting Comment...</p>

    if(errorDeleting) return <p className="comment-delete-error-message" id="delete-error"><strong>Something went wrong. Try again later.</strong></p>

    return(
        <button onClick={() => handleDelete()} className="comment-delete-button">Delete Comment</button>
    )
}