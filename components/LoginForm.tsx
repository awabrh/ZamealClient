import { Form, Formik } from "formik";
import React from "react";
import TextField from "./TextField";

function LoginForm() {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h2 className="text-4xl font-bold pb-6">تسجيل الدخول</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <TextField name="email" label="البريد الالكتروني" type="email" />
            <TextField name="password" label="كلمة المرور" type="password" />
            <button
              type="submit"
              className="bg-primary w-full mt-3 rounded-lg py-2 text-lg hover:bg-purple-900 transition-all"
              onClick={() => {}}
            >
              تسجيل الدخول
            </button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 font-light">
        <p>ليس لديك حساب؟</p>
        <span className="font-bold text-primary cursor-pointer hover:text-purple-700 transition-all">
          سجل الان
        </span>
      </div>
    </div>
  );
}

export default LoginForm;
