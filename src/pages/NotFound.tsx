import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-cyan-50 via-white to-sky-50">

            {/* Background Decorations */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

                <img
                    src="/404-bg.png"
                    alt="404"
                    className="w-full max-w-3xl select-none"
                    draggable={false}
                />

                <h1 className="mt-8 text-4xl md:text-5xl text-center font-bold text-slate-900">
                    Oops! Page Not Found
                </h1>

                <p className="mt-4 max-w-xl text-center text-lg leading-7 text-slate-500">
                    The page you're looking for doesn't exist, has been moved,
                    or the URL may be incorrect.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Button
                        variant="gradient"
                        size="lg"
                        leftIcon={<Home size={18} />}
                        onClick={() => navigate("/")}
                        className="cursor-pointer"
                    >
                        Go to Homepage
                    </Button>

                    <Button
                        variant="outlinePrimary"
                        size="lg"
                        leftIcon={<ArrowLeft size={18} />}
                        onClick={() => navigate(-1)}
                        className="cursor-pointer"
                    >
                        Go Back
                    </Button>

                </div>

                {/* <p className="mt-10 text-sm text-slate-400">
                    Error Code: <span className="font-semibold">404</span>
                </p> */}

            </div>
        </div>
    );
}

export default NotFound;