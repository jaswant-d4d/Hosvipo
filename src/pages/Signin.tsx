import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";

import { PasswordInput, Input, Button, Checkbox } from "../components/ui";

import { getCurrentYear } from "../utils/generals";

import { FormProvider, useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../hooks/useAuth";
import type { User } from "../contexts/AuthProvider";
import axios from "../api";


function Signin() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const methods = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
            remember: false
        },

        mode: "onBlur"
    });

    interface LoginResponse {
        accessToken: string;
        user: User;
    }

    const onSubmit = async (values: LoginFormData) => {
        try {
            const res = await axios.post<LoginResponse>("/auth/login", values);

            login(res.accessToken, res.user);

            navigate("/admin/dashboard");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src="/login-background.png"
                alt="Hospivo"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950/40" />

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8 lg:px-16">

                <div className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-2xl border border-white/20">

                    <div className="mb-8">
                        <img
                            src="/logo.png"
                            alt="Hospivo"
                            className="h-20 mb-8"
                        />

                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Welcome Back!
                        </h1>

                        <p className="mt-2 text-slate-600">
                            Sign in to securely access your Hospivo account and continue managing your hospital with confidence.
                        </p>
                    </div>

                    <FormProvider {...methods}>
                        <form className="space-y-5" onSubmit={methods.handleSubmit(onSubmit)}>

                            <Input
                                name="email"
                                label="Email Address"
                                icon={Mail}
                                placeholder="Enter your email"
                            />

                            <PasswordInput
                                name="password"
                                label="Password"
                                placeholder="Enter your password"
                            />

                            <div className="flex items-center justify-between text-sm">
                                <Checkbox name="rem" label="Remember me" />

                                <button
                                    type="button"
                                    className="font-medium text-cyan-600 hover:text-cyan-700"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <Button
                                fullWidth
                                variant="gradient"
                                size="lg"
                                onClick={function (): void {
                                    throw new Error("Function not implemented.");
                                }}                            >
                                Sign In
                            </Button>

                        </form>
                    </FormProvider>

                    <p className="mt-4 text-slate-500 text-center">Don't have an account - <Link to={"/sign-up"} className="font-medium hover:text-gray-700">Sign Up</Link></p>

                    <p className="mt-8 text-center text-sm text-slate-500">
                        © {getCurrentYear()} Hospivo. All rights reserved.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Signin;






// import { Mail } from "lucide-react";
// import { Input } from "../components/ui/Input";
// import { PasswordInput } from "../components/ui/PasswordInput";
// import Button from "../components/ui/Button";

// function Signin() {
//     return (
//         <div className="min-h-screen flex bg-[#bbcfe0]">

//             {/* Left Image */}
//             <div className="hidden lg:block lg:w-3/5 relative">
//                 <img
//                     src="/background.png"
//                     alt="Hospivo"
//                     className="absolute inset-0 h-full w-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-slate-950/60" />

//                 {/* Logo & Text */}
//                 <div className="absolute bottom-12 left-12 z-10 text-white max-w-md">
//                     <img
//                         src="/logo.png"
//                         alt="Hospivo"
//                         className="w-64 mb-8"
//                     />

//                     <h1 className="text-5xl font-bold leading-tight">
//                         Smart Hospital
//                         <br />
//                         Management System
//                     </h1>

//                     <p className="mt-5 text-lg text-slate-200">
//                         Securely manage patients, appointments, billing,
//                         pharmacy, laboratory, and hospital operations from a
//                         single platform.
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side */}
//             <div className="flex-1 flex items-center justify-center px-6 py-10">

//                 <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

//                     <div className="mb-8">
//                         <img
//                             src="/logo.png"
//                             alt="Hospivo"
//                             className="h-12 mb-8 lg:hidden"
//                         />

//                         <h1 className="text-3xl font-bold text-slate-900">
//                             Welcome Back!
//                         </h1>

//                         <p className="mt-2 text-slate-500">
//                             Please sign in to your account.
//                         </p>
//                     </div>

//                     <form className="space-y-6">

//                         <Input
//                             name="email"
//                             label="Email Address"
//                             icon={Mail}
//                             value=""
//                             placeholder="Enter your email"
//                             onChange={() => { }}
//                             error=""
//                         />

//                         <PasswordInput
//                             name="password"
//                             label="Password"
//                             value=""
//                             placeholder="Enter your password"
//                             onChange={() => { }}
//                             error=""
//                         />

//                         <div className="flex items-center justify-between text-sm">
//                             <label className="flex items-center gap-2">
//                                 <input type="checkbox" />
//                                 <span>Remember me</span>
//                             </label>

//                             <button
//                                 type="button"
//                                 className="text-blue-600 hover:underline"
//                             >
//                                 Forgot Password?
//                             </button>
//                         </div>

//                         <Button
//                             fullWidth
//                             variant="gradient"
//                             size="lg"
//                         >
//                             Sign In
//                         </Button>
//                     </form>

//                     <p className="mt-8 text-center text-sm text-slate-500">
//                         © 2026 Hospivo. All rights reserved.
//                     </p>

//                 </div>

//             </div>

//         </div>
//     );
// }

// export default Signin;