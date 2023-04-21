import { useState } from "react"
import { deleteComment } from "../api"

export const DeleteComment = ({comment_id, setSuccessfulDelete}) => {

    const [isDeleting, setIsDeleting] = useState(false)

    const handleDelete = () => {
        setIsDeleting(true)
        deleteComment(comment_id)
        .then((responseStatus) => {
            setIsDeleting(false)
            setSuccessfulDelete(true)
        })
    }

    if(isDeleting) return <p>Deleting Comment...</p>

    return(
        <button onClick={() => handleDelete()} className="comment-delete-button">Delete Comment</button>
    )
}