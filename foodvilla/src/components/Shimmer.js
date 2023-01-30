const Shimmer = ({value}) => {
    if (value==1) {
        return (
            <div className="cards">
                <div className="shimmer detail"></div>
            </div>
        );
    }
    return (
        <>
            {
                ([...Array(value)].map((r, k) => {
                    return (
                        <div className="card shimmer" key={k}>
                            <div className="img"></div>
                            <div className="caption">
                                <h3></h3>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    )
                }))
            }
        </>
    );
};

export default Shimmer;