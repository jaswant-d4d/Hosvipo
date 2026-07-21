
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Button } from "./ui";

const ErrorBoundary = () => {

    const error = useRouteError();

    let title = "Something went wrong";
    let message = "Please try again later.";

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "404 - Not Found";
            message = "The page or movie you are looking for does not exist.";
        } else if (error.status === 500) {
            title = "Server Error";
            message = "Something broke on the server.";
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 mb-6">{message}</p>

            <Button
                onClick={() => window.location.href = "/"}
                className=""
                variant="primary"
                size="lg"
            >
                Go to Home
            </Button>
        </div>
    );
};

export default ErrorBoundary;