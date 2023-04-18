import axios from "axios"

const reviewApi = axios.create({
    baseURL: "https://nc-games-service.onrender.com/api"
})

export const fetchReviews = () => {
    return reviewApi.get("/reviews")
    .then((response) => {
        return response.data.reviews
    })
}