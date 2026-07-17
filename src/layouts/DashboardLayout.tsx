import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { useState } from "react";

function DashboardLayout() {
    const [open, setOpen] = useState(false);
    const [miniSidebar, setMiniSidebar] = useState(false);
    return (
        <div className="min-h-screen bg-white">
            <Sidebar open={open} setOpen={setOpen} miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />


            <div className={`flex flex-col transition-all duration-300 ease-in-out ${miniSidebar ? "lg:ps-17" : "lg:ps-64"}`}>
                {open && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
                <Header setOpen={setOpen} miniSidebar={miniSidebar} setMiniSidebar={setMiniSidebar} />

                <main className="flex-1 p-6 overflow-y-auto bg-slate-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;