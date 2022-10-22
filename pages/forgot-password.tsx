import { Formik, Form } from "formik";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useForgotPasswordMutation } from "../generated/graphql";

const forgotPassword: React.FC<{}> = () => {
  const [, forgotPassword] = useForgotPasswordMutation();
  const [complete, setComplete] = useState(false);
  return (
    <div dir="rtl">
      <Navbar />
      <div className="flex flex-col items-center mt-32 gap-6 p-4">
        <h2 className="text-4xl font-bold pb-6">نسيت كلمة المرور</h2>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            await forgotPassword(values);
            setComplete(true);
          }}
        >
          {({ values, handleChange }) =>
            !complete ? (
              <Form>
                <TextField
                  name="email"
                  label="البريد الالكتروني"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-primary w-full mt-3 rounded-lg py-2 text-lg hover:bg-purple-900 transition-all"
                >
                  ارسال
                </button>
              </Form>
            ) : (
              <div>
                لقد قمنا بارسال رسالة تمكنك من اعادة تعيين كلمة المرور في حسابك،
                الرجاء مراجعة بريدك الالكتروني.
              </div>
            )
          }
        </Formik>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(forgotPassword);
