import {  useNavigate } from "react-router-dom";
import { PasswordInput,  Button, PageHeader } from "../../../components/ui";
import { FormProvider, useForm } from "react-hook-form";
import { ChangePasswordSchema, type ChangePasswordFormData } from "../../../schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../hooks/useAuth";
import type { User } from "../../../contexts/AuthProvider";
import axios from "../../../api";


function ChangePasswordPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const methods = useForm<ChangePasswordFormData>({
    resolver: zodResolver(ChangePasswordSchema),

    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    mode: "onBlur"
  });

  interface LoginResponse {
    accessToken: string;
    user: User;
  }

  const onSubmit = async (values: ChangePasswordFormData) => {
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
      <PageHeader
        title="Change Password"
        subtitle="Manage your password details, and security settings."
        breadcrumb={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Profile" },
        ]}
      />

      {/* Content */}
      <div className="relative z-10">

        <div className="mb-8">
          <FormProvider {...methods} >
            <form className="space-y-5" onSubmit={methods.handleSubmit(onSubmit)}>


              <PasswordInput
                name="oldPassword"
                label="Old Password"
                placeholder="Enter your old password"
              />
              <PasswordInput
                name="newPassword"
                label="New Password"
                placeholder="Enter your new password"
              />
              <PasswordInput
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter your confirm password"
              />



              <Button
                fullWidth
                variant="gradient"
                size="lg"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}                            >
                Change Password
              </Button>

            </form>
          </FormProvider>
        </div>

      </div>

    </div>
  );
}


export default ChangePasswordPage
