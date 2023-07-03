import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/CategoryCard.css"
import {Link} from "react-router-dom"
import { faClover, faMagnifyingGlass, faChessRook, faHandScissors, faDiceFive, faPuzzlePiece, faDiceD20 } from "@fortawesome/free-solid-svg-icons"

export const CategoryCard = ({category, description}) => {

    return(
        <Link className="category-card-link" to={`/reviews/categories/${category}`}>
            <div className="category-card">
                <h1>{category}</h1>
                <p>{description}</p>
                {
                    category === "strategy" ? <FontAwesomeIcon className="category-icon" icon={faChessRook} size="4x" /> :
                    category === "hidden-roles" ? <FontAwesomeIcon className="category-icon" icon={faMagnifyingGlass} size="4x"/> : 
                    category === "dexterity" ? <FontAwesomeIcon className="category-icon" icon={faHandScissors} size="4x"/> :
                    category === "push-your-luck" ? <FontAwesomeIcon className="category-icon" icon={faClover} size="4x"/> : 
                    category === "roll-and-write" ? <FontAwesomeIcon className="category-icon" icon={faDiceFive} size="4x"/> : 
                    category === "engine-building" ? <FontAwesomeIcon className="category-icon" icon={faPuzzlePiece} size="4x"/> : 
                    category=== "deck-building" ? <FontAwesomeIcon className="category-icon" icon={faDiceD20} size="4x"/> : null 
                }
            </div>
        </Link>
    )
}