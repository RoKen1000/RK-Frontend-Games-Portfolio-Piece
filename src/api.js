import axios from "axios"

const reviewApi = axios.create({
    baseURL: "https://nc-games-service.onrender.com/api"
})

export const fetchReviews = (category, sort_by, order) => {
    return reviewApi.get("/reviews", {params: {category, sort_by, order}})
    .then((response) => {
        return response.data.reviews
    })
}

export const fetchSpecificReview = (review_id) => {
    return reviewApi.get(`/reviews/${review_id}`)
    .then((response) => {
        return response.data.review
    })
}

export const fetchReviewComments = (review_id) => {
    return reviewApi.get(`/reviews/${review_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export const patchVotes = (vote_increment, review_id) => {
    return reviewApi.patch(`/reviews/${review_id}`, {inc_votes: vote_increment})
    .then((response) => {
        return response.data.updatedReview.votes
    })
}

export const postComment = (review_id, username, body) => {
    return reviewApi.post(`/reviews/${review_id}/comments`, {username, body})
    .then((response) => {
        return response.data.comment
    })
}

export const fetchCategories = () => {
    return reviewApi.get(`/categories`)
    .then((response) => {
        return response.data.categories
    })
}

export const deleteComment = (comment_id) => {
    return reviewApi.delete(`/comments/${comment_id}`)
    .then((response) => {
        return response.status
    })
}