"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SettingsForm } from "./SettingsForm";

const settingsSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    darkMode: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SettingsFormData = z.infer<typeof settingsSchema>;

export default function SettingsPage() {
  const defaultValues: SettingsFormData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    darkMode: false,
  };

  const methods = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: SettingsFormData) => {
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
          Settings
        </h1>
        <SettingsForm methods={methods} onSubmit={onSubmit} />
      </div>
    </div>
  );
}