import React from "react";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import { Formik, Form } from "formik";

function register() {
  return (
    <div dir="rtl">
      <Navbar />
      <div className="flex flex-col h-[32rem] items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-4">
          <h2 className="text-4xl font-bold pb-6">تسجيل حساب جديد</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <TextField
                  label="البريد الالكتروني"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <TextField
                  label="كلمة المرور"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-primary w-full mt-3 rounded-lg py-2 text-lg hover:bg-purple-900 transition-all"
                  onClick={() => {}}
                >
                  تسجيل
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default register;
