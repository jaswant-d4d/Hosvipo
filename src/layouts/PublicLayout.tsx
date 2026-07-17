import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function PublicLayout() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header setOpen={() => { }} miniSidebar={false} setMiniSidebar={() => { }} />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default PublicLayout;