import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { PasswordInput, Input, Button } from "../components/ui";

import { getCurrentYear } from "../utils/generals";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/auth.schema";


function Signup() {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      remember: false
    },

    mode: "onBlur"
  });

  const onSubmit = async (data: LoginFormData) => {

    console.log(data);
  }

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
              Welcome to Hospivo
            </h1>

            <p className="mt-2 text-slate-600">
              Register your hospital to start managing patients, staff, appointments, and healthcare services with Hospivo.
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

              <Button
                fullWidth
                variant="gradient"
                size="lg"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
              >
                Sign Up
              </Button>

            </form>
          </FormProvider>


          <p className="mt-4 text-slate-500 text-center">Already have account - <Link to={"/sign-in"} className="font-medium hover:text-gray-700">Sign In</Link></p>

          <p className="mt-8 text-center text-sm text-slate-500">
            © {getCurrentYear()} Hospivo. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
}
export default Signup
