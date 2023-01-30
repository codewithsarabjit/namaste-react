import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="errorPage">
            <h1>Oops</h1>
            <p>Something went wrong!</p>
            <p>{err.status + " :  " + err.statusText}</p>
        </div>
    );
};
export default ErrorPage;