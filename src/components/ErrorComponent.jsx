
export const ErrorComponent = ({error}) => {

    console.log(error.status)
    return(
        <div className="error-message">
            <h1>{error.status} {error.msg}</h1>
        </div>
    )
}