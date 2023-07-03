import { useState, useEffect } from "react"
import { fetchCategories } from "../api"
import { CategoryCard } from "./CategoryCard"
import {v4 as uuidv4} from "uuid"
import "../styles/CategoriesContainer.css"
import { Footer } from "./Footer"

export const CategoriesContainer = () => {

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCategories()
        .then((retrievedCategories) => {
            setIsLoading(false)
            setCategories(retrievedCategories)
        })
    }, [])

    if(isLoading) return <h1 className="loading-statement">Loading...</h1>

    return(
        <div>
            <main>
                <h1 id="category-instruction">View reviews by category here</h1>
                <div className="categories-container">
                    {categories.map((category) => {
                        return <CategoryCard
                            key={uuidv4()}
                            category={category.slug}
                            description={category.description}
                        />
                    })}
                </div>
            </main>
            {isLoading ? null : <Footer/>}
        </div>
    )
}