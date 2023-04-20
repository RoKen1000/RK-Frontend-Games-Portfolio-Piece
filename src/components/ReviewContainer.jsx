import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {fetchReviews} from "../api"
import { ReviewCard } from "./ReviewCard"
import "../styles/ReviewContainer.css"


export const ReviewContainer = () => {

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {category} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchReviews()
        .then((returnedReviews) => {
            setIsLoading(false)
            setReviews(returnedReviews)
        })
    }, [])

    const filteredReviews = reviews.filter((review) => {
        if(review.category === category){
            return review
        }
    })

    if(isLoading) return <h1 className="loading-statement">Loading...</h1>

    if(category){
        const filteredReviews = reviews.filter((review) => {
            if(review.category === category){
                return review
            }
        })

        return(
            <div className="reviews-container">
                {filteredReviews.map((review) => {
                    return <ReviewCard 
                        key={review.review_id}
                        title={review.title}
                        category={review.category}
                        image={review.review_img_url}
                        date={review.created_at}
                        comments={review.comment_count}
                        votes={review.votes}
                        review_id={review.review_id}
                    />
                })}
            </div>
        )
    }

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
                    review_id={review.review_id}
                />
            })}
        </div>
    )

}