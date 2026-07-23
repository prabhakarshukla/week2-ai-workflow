# AI Workflow Comparison

## Overview

This exercise compared two different approaches to building the same feature: a Settings page in a Next.js application.

- **Round 1:** A single vague prompt with almost no context.
- **Round 2:** A detailed prompt including project constraints, validation requirements, accessibility, reusable components, verification steps, and testing requirements.

## Round 1

The first implementation was created using the prompt:

> "Build a Settings page in Next.js with a form."

The generated code worked, but it relied on React's `useState` for form management and browser validation using HTML attributes such as `required`. The implementation was contained in a single file, making it harder to maintain as the project grows. No tests were generated and accessibility considerations were limited.

Although the feature worked, manual review was still required to verify correctness.

## Round 2

The second implementation was built using a structured prompt with clear technical requirements.

The generated solution included:

- React Hook Form
- Zod schema validation
- Reusable components
- Accessible form fields
- Validation tests
- Self-verification steps

The project became more modular and easier to maintain. Validation logic was separated from the UI, making future updates simpler.

## Verification

Instead of trusting the AI's response, I manually verified the project by running:

- `npm run build`
- `npx tsc --noEmit`
- `npm test`

All commands completed successfully.

During review I also found an AI mistake. The model reported that everything was correctly configured, but the generated Jest configuration contained an incorrect option (`setupFilesAfterSetup`) which produced warnings. This had to be corrected manually. I also noticed temporary IDE diagnostics that required independent verification instead of trusting the AI's summary.

## Conclusion

Round 2 required more effort while writing the prompt, but significantly reduced review time and produced higher quality code. Providing clear constraints, expected behavior, verification steps, and project context resulted in a cleaner implementation with better maintainability, accessibility, and reliability. This exercise demonstrated that prompt quality directly affects the quality of AI-generated code and that manual verification remains an essential part of any AI-assisted development workflow.