import { useState, useEffect } from "react"
import {fetchReviews} from "../api"
import { ReviewCard } from "./ReviewCard"
import "../styles/ReviewContainer.css"

export const ReviewContainer = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews()
        .then((returnedReviews) => {
            setReviews(returnedReviews)
        })
    }, [])

    return(
        <div className="reviews-container">
            {reviews.map((review) => {
                return <ReviewCard 
                    key={review.review_id}
                    title={review.title}
                    category={review.category}
                    image={review.review_img_url}
                    date={review.created_at}
                    comments={review.comment_count}
                    votes={review.votes}
                />
            })}
        </div>
    )

}