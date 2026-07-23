"use client";

import { UseFormReturn } from "react-hook-form";
import { SettingsFormData } from "./types";
import { InputField } from "./InputField";
import { ToggleField } from "./ToggleField";
import { SubmitButton } from "./SubmitButton";
import { SuccessMessage } from "./SuccessMessage";

interface SettingsFormProps {
  methods: UseFormReturn<SettingsFormData, object, SettingsFormData>;
  onSubmit: (data: SettingsFormData) => Promise<void>;
}

export function SettingsForm({
  methods,
  onSubmit,
}: SettingsFormProps) {
  const { handleSubmit, formState: { isSubmitting, isSubmitSuccessful } } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 p-6 space-y-6">
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          methods={methods}
          type="text"
        />
        
        <InputField
          label="Email"
          name="email"
          placeholder="Enter your email"
          methods={methods}
          type="email"
        />
        
        <InputField
          label="Password"
          name="password"
          placeholder="Enter your password"
          methods={methods}
          type="password"
        />
        
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          methods={methods}
          type="password"
        />
        
        <ToggleField
          label="Dark Mode"
          name="darkMode"
          methods={methods}
        />
      </div>

      <div className="flex justify-end">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>

      {isSubmitSuccessful && <SuccessMessage />}
    </form>
  );
}