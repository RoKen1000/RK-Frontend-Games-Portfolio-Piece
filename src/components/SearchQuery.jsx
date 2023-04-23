import "../styles/SearchQuery.css"
import { useState } from "react"

export const SearchQuery = ({setSearchParams, setShowSearchBar, setShowSearchButton}) => {

    const [filterBy, setFilterBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("asc")

    const handleSearchQueries = (e) => {
        e.preventDefault()
        setShowSearchBar(false)
        setShowSearchButton(true)
        setSearchParams({sort_by: filterBy, order: orderBy})
    }

    return(
        <main>
            <form className="search-query-form" onSubmit={handleSearchQueries}>
                <div className="search-query-sort-by">
                    <label htmlFor="select-filter-query">Sort By: </label>
                    <select name="filter-choice" onChange={(e) => setFilterBy(e.target.value)}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comment Count</option>
                        <option value="votes">Votes</option>
                    </select>
                </div>
                <div className="search-query-order-by">
                    <label htmlFor="ascending">Ascending</label>
                    <input type="radio" name="order-filter" value="asc" checked onChange={(e) => setOrderBy(e.target.value)}/>
                    <label htmlFor="descending">Descending</label>
                    <input type="radio" name="order-filter" value="desc" onChange={(e) => setOrderBy(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}