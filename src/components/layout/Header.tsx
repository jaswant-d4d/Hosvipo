import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "../ui"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/features", title: "Features" },
  { link: "/solutions", title: "Solutions" },
  { link: "/pricing", title: "Pricing" },
  { link: "/about-us", title: "About Us" },
  { link: "/contact", title: "Contact" },
]
function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-360 items-center justify-between px-4 lg:px-6">

          <NavLink to="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="Hospivo"
              className="h-16 lg:h-18 w-auto object-contain"
            />
          </NavLink>

          <ul className="hidden flex-1 lg:flex items-center justify-center gap-8">
            {navLinks?.map(({ title, link }) => (
              <li key={title}>
                <NavLink to={link}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${isActive
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                    }`
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button variant="outlinePrimary" size="md" onClick={() => navigate("/sign-in")}>Login</Button>
            <Button variant="primary" size="md"onClick={() => { navigate("/contact") }}>Get Started</Button>
          </div>

          {/* Mobile Header */}
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[90vw] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
          <img
            src="/logo.png"
            alt="Hospivo"
            className="h-12 w-auto"
          />

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-2">
            {navLinks.map(({ title, link }) => (
              <li key={link}>
                <NavLink
                  to={link}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 font-medium transition ${isActive
                      ? "bg-primary-light text-primary"
                      : "text-slate-700 hover:bg-slate-100 hover:text-primary"
                    }`
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-6 space-y-3">
          <Button
            variant="outlinePrimary"
            className="w-full"
            onClick={() => handleNavigate("/sign-in")}
          >
            Login
          </Button>

          <Button
            variant="primary"
            className="w-full"
            onClick={() => handleNavigate("/contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header;
