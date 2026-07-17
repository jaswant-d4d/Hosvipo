import { Activity, Bell, Calendar, Contact, Hospital, LayoutDashboard, Settings, Stethoscope, User, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/admin/dashboard",
    },
    {
        name: "Hospitals",
        icon: Hospital,
        path: "/admin/hospitals",
    },
    {
        name: "Doctors",
        icon: Stethoscope,
        path: "/admin/doctors",
    },
    {
        name: "Patients",
        icon: Users,
        path: "/admin/patients",
    },
    {
        name: "Appointments",
        icon: Calendar,
        path: "/admin/appointments",
    },
    {
        name: "Notifications",
        icon: Bell,
        path: "/admin/notifications",
    },
    {
        name: "Contacts",
        icon: Contact,
        path: "/admin/contacts",
    },
    {
        name: "Settings",
        icon: Settings,
        path: "/admin/settings",
    },
    {
        name: "Activity",
        icon: Activity,
        path: "/admin/activities",
    },
    {
        name: "Profile",
        icon: User,
        path: "/admin/profile",
    },
];

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
    miniSidebar: boolean
    setMiniSidebar: (open: boolean) => void
}
function Sidebar({ open, setOpen, miniSidebar }: Props) {
    const location = useLocation();

    return (
        <aside
            className={`
                    fixed z-50 top-0 left-0 h-full
                    border-r border-slate-300
                    transition-all duration-300 ease-in-out
                    bg-white shadow-md
                    text-slate-800

                    ${miniSidebar ? "w-17" : "w-64"}

                    ${open
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                }
                `}
        >

            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="h-20 flex items-center px-4 border-b border-slate-200">
                    {miniSidebar ? (
                        <img
                            src="/mobile-logo.png"
                            alt="Hospivo"
                            className="h-10 w-10 object-contain mx-auto transition-all duration-300"
                        />
                    ) : (
                        <img
                            src="/logo.png"
                            alt="Hospivo"
                            className="h-20 object-contain transition-all duration-300"
                        />
                    )}
                </div>

                {/* Menu */}
                <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        const active =
                            item.path === "/admin/dashboard"
                                ? location.pathname === "/admin" ||
                                location.pathname === "/admin/dashboard"
                                : location.pathname.startsWith(item.path);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={`
                                        flex items-center gap-3 px-3 py-3 rounded-xl
                                        transition-all duration-200
                                        text-slate-800
                                        ${active
                                        ? "text-primary! bg-primary-light"
                                        : "text-sidebar-foreground hover:bg-primary-light hover:text-primary"
                                    }
                                    `}
                            >
                                <Icon size={20} />

                                {!miniSidebar && (
                                    <span className="text-sm font-medium">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
