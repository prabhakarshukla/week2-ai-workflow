import { settingsSchema } from "./types";
import { SettingsFormData } from "./types";

const validData: SettingsFormData = {
  fullName: "John Doe",
  email: "test@example.com",
  password: "password123",
  confirmPassword: "password123",
  darkMode: false,
};

describe("settingsSchema", () => {
  describe("fullName", () => {
    it("should pass with a valid name", () => {
      const result = settingsSchema.safeParse({ ...validData, fullName: "John Doe" });
      expect(result.success).toBe(true);
    });

    it("should fail with empty name", () => {
      const result = settingsSchema.safeParse({ ...validData, fullName: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Full name is required");
      }
    });
  });

  describe("email", () => {
    it("should pass with a valid email", () => {
      const result = settingsSchema.safeParse({ ...validData, email: "test@example.com" });
      expect(result.success).toBe(true);
    });

    it("should fail with invalid email", () => {
      const result = settingsSchema.safeParse({ ...validData, email: "invalid-email" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Invalid email");
      }
    });
  });

  describe("password", () => {
    it("should pass with 8+ characters", () => {
      const result = settingsSchema.safeParse({ ...validData, password: "password123", confirmPassword: "password123" });
      expect(result.success).toBe(true);
    });

    it("should fail with less than 8 characters", () => {
      const result = settingsSchema.safeParse({ ...validData, password: "short", confirmPassword: "short" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("at least 8");
      }
    });
  });

  describe("confirmPassword", () => {
    it("should pass when passwords match", () => {
      const result = settingsSchema.safeParse({ ...validData, password: "password123", confirmPassword: "password123" });
      expect(result.success).toBe(true);
    });

    it("should fail when passwords don't match", () => {
      const result = settingsSchema.safeParse({ ...validData, password: "password123", confirmPassword: "different" });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toContain("Passwords do not match");
        expect(result.error.issues[0].path).toContain("confirmPassword");
      }
    });
  });

  describe("darkMode", () => {
    it("should pass with boolean values", () => {
      const resultTrue = settingsSchema.safeParse({ ...validData, darkMode: true });
      const resultFalse = settingsSchema.safeParse({ ...validData, darkMode: false });
      expect(resultTrue.success).toBe(true);
      expect(resultFalse.success).toBe(true);
    });
  });

  describe("full validation", () => {
    it("should pass with all valid data", () => {
      const result = settingsSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should fail with multiple errors", () => {
      const result = settingsSchema.safeParse({
        fullName: "",
        email: "invalid",
        password: "short",
        confirmPassword: "different",
        darkMode: "not-boolean" as any,
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThanOrEqual(4);
      }
    });
  });
});