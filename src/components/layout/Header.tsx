import { Menu, PanelLeftOpen, PanelRightOpen } from "lucide-react"
import type { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  miniSidebar: boolean
  setMiniSidebar: Dispatch<SetStateAction<boolean>>
}

function Header({ setOpen, miniSidebar, setMiniSidebar }: Props) {
  const getCrudTitle = (
    pathname: string,
    resource: string,
    label: string
  ) => {
    if (pathname === `/admin/${resource}`)
      return label;

    if (pathname === `/admin/${resource}/new`)
      return `Add ${label.slice(0, -1)}`;

    if (
      new RegExp(`^/admin/${resource}/[^/]+/edit$`).test(pathname)
    )
      return `Edit ${label.slice(0, -1)}`;

    if (
      new RegExp(`^/admin/${resource}/[^/]+$`).test(pathname)
    )
      return `View ${label.slice(0, -1)}`;

    return null;
  };

  const staticTitles: Record<string, string> = {
    "/admin/dashboard": "Dashboard",
    "/admin/settings": "Settings",
    "/admin/activities": "Activity",
    "/admin/profile": "Profile",
    "/admin/subscriptions": "Subscriptions",
    "/admin/payments": "Payments",
    "/admin/contacts": "Contacts",
  };

  const getTitle = (pathname: string) => {
    const crudTitle =
      getCrudTitle(pathname, "users", "Users") ||
      getCrudTitle(pathname, "contents", "Contents") ||
      getCrudTitle(pathname, "genres", "Genres") ||
      getCrudTitle(pathname, "persons", "Persons");

    return crudTitle || staticTitles[pathname] || "Dashboard";
  };

  const title = getTitle(window.location.pathname);
  document.title = title;

  return (
    <header className="sticky inset-0 h-16 z-50 border-b border-slate-200 flex items-center justify-between px-6 lg:px-6 bg-background">
      {/* Mobile Menu */}
      <div className="flex items-center gap-2">

        {/* Mobile Sidebar Toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex lg:hidden items-center justify-center h-10 w-10 rounded-xl transition-all duration-200 hover:bg-primary-light hover:text-primary cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Desktop Mini Sidebar Toggle */}
        <button
          type="button"
          onClick={() => setMiniSidebar((prev: boolean) => !prev)}
          className="hidden lg:flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-200 hover:bg-primary-light hover:text-primary cursor-pointer"
          aria-label={miniSidebar ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {miniSidebar ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelRightOpen size={20} />
          )}
        </button>
        <h1 className="ml-3 lg:m-0 text-lg font-semibold">
          {title}
        </h1>

      </div>
    </header>
  )
}

export default Header
