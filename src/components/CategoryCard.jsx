import "../styles/CategoryCard.css"
import {Link} from "react-router-dom"

export const CategoryCard = ({category, description}) => {

    return(
        <Link to={`/reviews/categories/${category}`}>
            <div className="category-card">
                <h1>{category}</h1>
                <p>{description}</p>
            </div>
        </Link>
    )
}