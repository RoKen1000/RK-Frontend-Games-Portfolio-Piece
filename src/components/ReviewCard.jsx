import "../styles/ReviewCard.css"
import {Link} from "react-router-dom"

export const ReviewCard = ({title, category, image, date, comments, votes, review_id}) => {

    return(
        <main>
            <div className="review-card">
                <Link to={`/reviews/${review_id}`}
                >
                    <img src={image} alt="review-thumbnail" className="review-thumbnail"/>
                </Link>
                <div className="review-card-content">
                    <h1 className="card-title">{title}</h1>
                    <p><strong>Category:</strong> {category}</p>
                    <p className="review-info">
                        <strong>Date Posted:</strong> {date.slice(0, 10)}<br></br> <strong>Votes:</strong> {votes}<br></br><strong>Comments:</strong> {comments}</p>
                </div>
            </div>
        </main>
    )
}