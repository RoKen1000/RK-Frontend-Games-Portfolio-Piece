import "../styles/ReviewCard.css"

export const ReviewCard = ({title, category, image, date, comments, votes}) => {

    return(
        <div className="review-card">
            <h3 className="card-title">{title}</h3>
            <p>Category: {category}</p>
            <img src={image} alt="review-thumbnail" className="review-thumbnail"/>
            <p className="review-info"><strong>Date Posted:</strong> {date.slice(0, 10)} <strong>Votes:</strong> {votes} <strong>Comments:</strong> {comments}</p>
            <button className="view-full-review-button">Read Full Review</button>
        </div>
    )
}