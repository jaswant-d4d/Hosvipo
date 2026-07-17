import { Outlet } from "react-router-dom";

function BlankLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Outlet />
        </div>
    );
}

export default BlankLayout;