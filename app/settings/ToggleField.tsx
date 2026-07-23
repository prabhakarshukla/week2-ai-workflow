"use client";

import { Controller, useFormContext } from "react-hook-form";
import { SettingsFormData } from "./types";

interface ToggleFieldProps {
  label: string;
  name: keyof SettingsFormData;
  methods: ReturnType<typeof import("react-hook-form").useForm<SettingsFormData>>;
}

export function ToggleField({ label, name, methods }: ToggleFieldProps) {
  const { control, formState: { errors } } = methods;
  const error = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center justify-between">
          <label htmlFor={name} className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
          <div className="relative">
            <input
              type="checkbox"
              id={name}
              checked={field.value as boolean}
              onChange={(e) => field.onChange(e.target.checked)}
              className="sr-only peer"
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <div className="w-11 h-6 bg-zinc-200 dark:bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-zinc-900 dark:peer-focus:ring-zinc-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900 dark:peer-checked:bg-zinc-100" />
          </div>
        </div>
      )}
    />
  );
}