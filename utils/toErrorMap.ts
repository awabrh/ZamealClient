import { FieldError } from "../generated/graphql";

const arabicErrors = new Map([
  ["Account already exists", "هذا الحساب موجود مسبقاً"],
  ["This account doesn't exist", "هذا الحساب غير موجود"],
  ["Invalid Password", "كلمة المرور غير صحيحة"],
]);

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = arabicErrors.get(message) || message;
  });

  return errorMap;
};
