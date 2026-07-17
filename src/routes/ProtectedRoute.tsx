import { Navigate, Outlet, useLocation } from "react-router-dom";
import GlobalLoader from "../components/GlobalLoader";
// import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = () => {
    const location = useLocation();

    const user = { name: "Jaswant Singh", role: "admin", isAuthenticated: true }
    const token = "vl40gjigm3490b0409bjmeoimxclkmoqj0-3jw-k20oe1jfiomf93t093409fj3904fj90acj590fdsiu3n48t";
    const loading = false

    // const { user, loading } = useAuth();
    // const token = localStorage.getItem("accessToken");


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <GlobalLoader />
            </div>
        );
    }

    if (!token || !user) {
        return (
            <Navigate
                to="/sign-in"
                state={{ from: location }}
                replace
            />
        );
    }

    const isAuthenticated = user?.role === "admin" && user?.isAuthenticated;

    // ✅ Admin check
    if (!isAuthenticated) {
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;