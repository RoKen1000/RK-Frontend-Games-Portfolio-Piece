
import { useState } from "react"

export const SearchQuery = ({searchParams, setSearchParams}) => {

    const [filterBy, setFilterBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("asc")

    const handleSearchQueries = (e) => {
        e.preventDefault()
        
        const newSortParam = new URLSearchParams(searchParams)
        setSearchParams({sort_by: filterBy, order: orderBy})
    }

    return(
        <main>
            <form className="search-query-form" onSubmit={handleSearchQueries}>
                <label htmlFor="select-filter-query">Sort By: </label>
                <select name="filter-choice" onChange={(e) => setFilterBy(e.target.value)}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                </select>
                <label htmlFor="ascending">Ascending</label>
                <input type="radio" name="order-filter" value="asc" onChange={(e) => setOrderBy(e.target.value)}/>
                <label htmlFor="descending">Descending</label>
                <input type="radio" name="order-filter" value="desc" onChange={(e) => setOrderBy(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}