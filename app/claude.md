---

# Project Rules Learned (Week 2)

## Rule 1

All forms must use React Hook Form with Zod validation. Avoid browser-only validation and uncontrolled form inputs.

## Rule 2

Every form must be accessible:
- Associate every input with a label.
- Use `aria-invalid` for invalid fields.
- Display accessible validation messages.

## Rule 3

Never trust AI verification alone.

Before considering any feature complete, always run:

```bash
npm run build
npx tsc --noEmit
npm test

## Rule 4

Prefer reusable components instead of placing all UI and business logic inside a single page component.

## Rule 5

AI-generated code must be manually reviewed before committing, even if the model claims that all tests have passed.


---

# 📊 Round 1 vs Round 2 (Add to README or keep for reference)

| Feature | Round 1 | Round 2 |
|---------|---------|---------|
| Prompt | One sentence | Detailed specification |
| Form Handling | useState | React Hook Form |
| Validation | HTML `required` | Zod Schema |
| Code Structure | Single file | Modular components |
| Accessibility | Basic | Proper labels + aria-invalid |
| Tests | None | 11 validation tests |
| Verification | Manual only | AI + Manual verification |
| Maintainability | Medium | High |

---

# 📦 Final Git Commands

```bash
git add .
git commit -m "docs: add workflow analysis and project rules"
git push