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

export const ContactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Full name is required")
        .min(3, "Name must be at least 3 characters")
        .max(100, "Name must not exceed 100 characters"),

    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email address"),

    phone: z
        .string()
        .trim()
        .min(1, "Phone number is required")
        .regex(
            /^[0-9+\-\s()]{7,20}$/,
            "Please enter a valid phone number"
        ),

    subject: z
        .string()
        .trim()
        .min(1, "Subject is required")
        .min(5, "Subject must be at least 5 characters")
        .max(150, "Subject must not exceed 150 characters"),

    message: z
        .string()
        .trim()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must not exceed 1000 characters"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
