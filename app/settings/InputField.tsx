"use client";

import { Controller, FieldError } from "react-hook-form";
import { SettingsFormData } from "./types";

interface InputFieldProps {
  label: string;
  name: keyof SettingsFormData;
  placeholder: string;
  methods: ReturnType<typeof import("react-hook-form").useForm<SettingsFormData>>;
  type?: "text" | "email" | "password";
}

export function InputField({ label, name, placeholder, methods, type = "text" }: InputFieldProps) {
  const { control, formState: { errors } } = methods;
  const error = errors[name] as FieldError | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-1.5">
          <label htmlFor={name} className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
          <input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            value={field.value as string}
            onChange={(e) => field.onChange(e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border transition-colors bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 ${
              error
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-zinc-300 dark:border-zinc-600"
            }`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${name}-error` : undefined}
          />
          {error && (
            <p id={`${name}-error`} className="text-sm text-red-600 dark:text-red-400" role="alert">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
