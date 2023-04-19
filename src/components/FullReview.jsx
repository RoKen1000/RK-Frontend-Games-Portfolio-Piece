import { useState } from "react"
import {useParams} from "react-router-dom"
import { fetchSpecificReview } from "../api"
import "../styles/FullReview.css"
import {CommentsContainer} from "./CommentsContainer"

export const FullReview = ({user}) => {
    const {review_id} = useParams()

    const [fullReview, setFullReview] = useState({})
    const [reviewLoading, setReviewLoading] = useState(false)
    
    useState(() => {
        setReviewLoading(true)
        fetchSpecificReview(review_id)
        .then((review) => {
            setReviewLoading(false)
            setFullReview(review)
        })
    }, [])

    if(reviewLoading) return <h1 className="review-loading-message">Loading Review...</h1>

    return(
        <article>
            <section className="full-review-container">
                <h1 className="full-review-title">{fullReview.title}</h1>
                <h2 className="full-review-designer">Designed by {fullReview.designer}</h2>
                <h2 className="full-review-category">Category: {fullReview.category}</h2>
                <img className="full-review-image" src={fullReview.review_img_url} alt="sample-of-board-game-in-action"/>
                <h2 className="full-review-info"><strong>By: {fullReview.owner}, Votes: {fullReview.votes}, Created At: {fullReview.created_at}</strong></h2>
                <div className="full-review-body-container">
                    <p className="full-review-body">{fullReview.review_body}</p>
                </div>
                <div className="full-review-button-container">
                    <button>❤️</button>
                    <button>Post A Comment</button>
                </div>
            </section>
            <section>
                <CommentsContainer review_id={review_id} user={user}/>
            </section>
        </article>
    )
}