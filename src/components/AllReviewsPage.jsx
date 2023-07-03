import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import {fetchReviews} from "../api"
import { ReviewCard } from "./ReviewCard"
import "../styles/AllReviewsPage.css"
import { SearchQuery } from "./SearchQuery"
import { ErrorComponent } from "./ErrorComponent"


export const AllReviewsPage = () => {

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const {category} = useParams()
    const [error, setError] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams()
    const sortByQuery = searchParams.get("sort_by")
    const orderQuery = searchParams.get("order")

    useEffect(() => {
        setIsLoading(true)
        fetchReviews(category, sortByQuery, orderQuery)
        .then((returnedReviews) => {
            setIsLoading(false)
            setReviews(returnedReviews)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error.response.data)
        })
    }, [category, sortByQuery, orderQuery])

    if(isLoading) return <h1 className="loading-statement">Loading...</h1>

    if(error) return <ErrorComponent error={error}/>

    return(
        <main>
           <SearchQuery searchParams={searchParams} setSearchParams={setSearchParams} />
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
        </main>
    )

}