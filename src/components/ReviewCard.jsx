import "../styles/ReviewCard.css"
import { FullReview } from "./FullReview"
import {Link} from "react-router-dom"

export const ReviewCard = ({title, category, image, date, comments, votes, review_id}) => {

    return(
        <main>
            <div className="review-card">
                <h3 className="card-title">{title}</h3>
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