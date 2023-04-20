import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {fetchReviews} from "../api"

export const ReviewsByCategory = () => {

    const {category} = useParams()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
    
    return(
        <main>
            <div className="review-card">
                <h1 className="card-title">{title}</h1>
                <p>Category: {category}</p>
                <img src={image} alt="review-thumbnail" className="review-thumbnail"/>
                <p className="review-info"><strong>Date Posted:</strong> {date.slice(0, 10)} <strong>Votes:</strong> {votes} <strong>Comments:</strong> {comments}</p>
                <Link to={`/reviews/${review_id}`}
                className="view-full-review-button">
                    <button className="view-full-review-button-text" ><strong>Read Full Review</strong></button>
                </Link>
            </div>
        </main>
    )
}