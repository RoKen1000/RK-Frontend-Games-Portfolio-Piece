import "../styles/SearchQuery.css"
import { useState } from "react"

export const SearchQuery = ({setSearchParams}) => {

    const [filterBy, setFilterBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("asc")

    const handleSearchQueries = (e) => {
        e.preventDefault()
        setSearchParams({sort_by: filterBy, order: orderBy})
    }

    return(
        <main>
            <form className="search-query-form" onSubmit={handleSearchQueries}>
                <div className="search-query-filter-by">
                    <label htmlFor="select-filter-query">Filter By</label>
                    <select id="select-filter-query" name="filter-choice" onChange={(e) => setFilterBy(e.target.value)}>
                        <option className="filter-query-option" value="created_at">Date</option>
                        <option className="filter-query-option" value="comment_count">Comment Count</option>
                        <option className="filter-query-option" value="votes">Votes</option>
                    </select>
                </div>
                <div className="search-query-order-by">
                    <label htmlFor="ascending">Ascending</label>
                    <input id="ascending" type="radio" name="order-filter" value="asc" checked onChange={(e) => setOrderBy(e.target.value)}/>
                    <label htmlFor="descending">Descending</label>
                    <input id="descending" type="radio" name="order-filter" value="desc" onChange={(e) => setOrderBy(e.target.value)}/>
                </div>
                <button className="search-query-submit-button" type="submit">Go!</button>
            </form>
        </main>
    )
}