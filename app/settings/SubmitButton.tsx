"use client";

export function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
        isSubmitting
          ? "bg-zinc-400 dark:bg-zinc-600 text-zinc-100"
          : "bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300"
      }`}
    >
      {isSubmitting ? "Saving..." : "Save Changes"}
    </button>
  );
}