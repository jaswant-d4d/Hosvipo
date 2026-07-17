import { createBrowserRouter } from "react-router-dom";
import { authRoutes, protectedRoutes, publicRoutes } from "./routesConfig";

import ErrorBoundary from "../components/ErrorBoundary";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

import { AuthLayout, BlankLayout, DashboardLayout, PublicLayout } from "../layouts";


export const router = createBrowserRouter([
    {
        element: <PublicLayout />,
        errorElement: <ErrorBoundary />,
        children: publicRoutes,
    },
    {
        element: <AuthLayout />,
        errorElement: <ErrorBoundary />,
        children: authRoutes,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <DashboardLayout />,
                children: protectedRoutes,
            },
        ],
    },
    {
        element: <BlankLayout />,
        children: [
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);