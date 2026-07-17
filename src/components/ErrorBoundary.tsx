
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 mb-6">{message}</p>

            <button
                onClick={() => window.location.href = "/"}
                className="bg-red-600 px-6 py-2 rounded-lg cursor-pointer hover:bg-red-700"
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default ErrorBoundary;