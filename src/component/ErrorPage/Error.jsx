import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div className="h-[500px] items-center flex flex-col justify-center space-y-5">
            <h1 className="text-[20px] font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="btn ">
                <NavLink to="/">Go Back</NavLink>
            </div>
        </div>
    );
};

export default Error;