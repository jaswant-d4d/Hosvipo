
import { AboutUs, ActivitiesPage, AppointmentsPage, ChangePasswordPage, ContactsPage, ContactUs, DashboardPage, DoctorsPage, Features, ForgotPassword, Home, HospitalsPage, NotificationsPage, PatientsPage, ProfilePage, ResetPassword, SettingsPage, Signin, Signup, Solutions } from "./lazyPages";

export const publicRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/features",
        element: <Features />,
    },
    {
        path: "/solutions",
        element: <Solutions />,
    },
    {
        path: "contact-us",
        element: <ContactUs />,
    },
    {
        path: "about-us",
        element: <AboutUs />,
    },
]

export const authRoutes = [
    {
        path: "sign-in",
        element: <Signin />,
    },
    {
        path: "sign-up",
        element: <Signup />,
    },
    {
        path: "forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "reset-password/:token",
        element: <ResetPassword />,
    },
];

export const protectedRoutes = [
    {
        path: "admin/dashboard",
        element: <DashboardPage />,
    },
    {
        path: "admin/hospitals",
        element: <HospitalsPage />,
    },
    {
        path: "admin/activities",
        element: <ActivitiesPage />,
    },
    {
        path: "admin/doctors",
        element: <DoctorsPage />,
    },
    {
        path: "admin/patients",
        element: <PatientsPage />,
    },
    {
        path: "admin/appointments",
        element: <AppointmentsPage />,
    },
    {
        path: "admin/notifications",
        element: <NotificationsPage />,
    },
    {
        path: "admin/contacts",
        element: <ContactsPage />,
    },
    {
        path: "admin/settings",
        element: <SettingsPage />,
    },
    {
        path: "admin/profile",
        element: <ProfilePage />,
    },
    {
        path: "admin/profile/change-password",
        element: <ChangePasswordPage />,
    },
]