import { useRouteError } from "react-router";

const Error = () => {
    const routeErr = useRouteError();
    console.log(routeErr);
    return (
        <div>
            <h1>Ooops!!!!</h1>
            <h2>Something Went Wrong!!!</h2>
            <h3>{routeErr.status}: {routeErr.statusText} {routeErr.data}</h3>
        </div>
    )
}

export default Error;