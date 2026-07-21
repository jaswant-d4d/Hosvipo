import { lazy } from "react";

export const Signin = lazy(() => import("../pages/Signin"))
export const Signup = lazy(() => import("../pages/Signup"))
export const ForgotPassword = lazy(() => import("../pages/ForgotPassword"))
export const ResetPassword = lazy(() => import("../pages/ResetPassword"))


export const Home = lazy(() => import("../pages/Home"))
export const AboutUs = lazy(() => import("../pages/AboutUs"))
export const ContactUs = lazy(() => import("../pages/ContactUs"))
export const Features = lazy(() => import("../pages/Features"))
export const Solutions = lazy(() => import("../pages/Solutions"))
export const Pricing = lazy(() => import("../pages/Pricing"))


export const DashboardPage = lazy(() => import("../features/dashboard/pages/DashboardPage"))
export const DoctorsPage = lazy(() => import("../features/doctors/pages/DoctorsPage"))
export const PatientsPage = lazy(() => import("../features/patients/pages/PatientsPage"))
export const NotificationsPage = lazy(() => import("../features/notifications/pages/NotificationsPage"))
export const HospitalsPage = lazy(() => import("../features/hospitals/pages/HospitalsPage"))
export const AppointmentsPage = lazy(() => import("../features/appointments/pages/AppointmentsPage"))
export const ActivitiesPage = lazy(() => import("../features/activities/pages/ActivitiesPage"))
export const SettingsPage = lazy(() => import("../features/settings/pages/SettingsPage"))
export const ContactsPage = lazy(() => import("../features/contacts/pages/ContactsPage"))
export const ProfilePage = lazy(() => import("../features/profile/pages/ProfilePage"))
export const ChangePasswordPage = lazy(() => import("../features/profile/pages/ChangePasswordPage"))