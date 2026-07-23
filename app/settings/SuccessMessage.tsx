"use client";

export function SuccessMessage() {
  return (
    <div
      className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
      role="alert"
    >
      <div className="flex items-center gap-2">
        <svg
          className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-green-800 dark:text-green-300 text-sm font-medium">
          Settings saved successfully!
        </p>
      </div>
    </div>
  );
}