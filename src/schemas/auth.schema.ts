import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email address"),

    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),

    remember: z.boolean().optional()
});
export type LoginFormData = z.infer<typeof loginSchema>;


export const ChangePasswordSchema = z.object({
    oldPassword: z
        .string()
        .min(1, "Password is required"),
    newPassword: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
        .string()
        .min(1, "Password is required")
});
export type ChangePasswordFormData = z.infer<typeof ChangePasswordSchema>;
