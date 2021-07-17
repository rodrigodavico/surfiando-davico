const Spinner = () => {
    return(
        <div className="d-flex my-5">
            <div className="spinner-border text-primary" role="status" style={{ "width" : "6rem", "height" : "6rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner