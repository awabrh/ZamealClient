import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import TextField from "./TextField";

function LoginForm() {
  const [, login] = useLoginMutation();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-4xl font-bold pb-6">تسجيل الدخول</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            router.push("/");
          }
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <TextField
              name="email"
              label="البريد الالكتروني"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="كلمة المرور"
              type="password"
              value={values.email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-primary w-full mt-3 rounded-lg py-2 text-lg hover:bg-purple-900 transition-all"
            >
              تسجيل الدخول
            </button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 font-light">
        <p>ليس لديك حساب؟</p>
        <span
          onClick={() => router.push("/add")}
          className="font-bold text-primary cursor-pointer hover:text-purple-700 transition-all"
        >
          سجل الان
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
