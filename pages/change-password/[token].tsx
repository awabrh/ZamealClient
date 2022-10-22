import { Form, Formik } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import TextField from "../../components/TextField";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";

export const changePassword: NextPage<{ token: string }> = ({ token }) => {
  const [, changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const [tokenError, setTokenError] = useState("");

  return (
    <div dir="rtl">
      <Navbar />
      <div className="flex flex-col h-[32rem] items-center justify-center">
        <div className="flex flex-col items-center gap-6 p-4">
          <h2 className="text-4xl font-bold pb-6">تغيير كلمة المرور</h2>
          <Formik
            initialValues={{ newPassword: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await changePassword({
                token,
                newPassword: values.newPassword,
              });
              if (response.data?.changePassword.errors) {
                const errorMap = toErrorMap(
                  response.data.changePassword.errors
                );
                if ("token" in errorMap) {
                  setTokenError(errorMap.token);
                }
                setErrors(errorMap);
              } else if (response.data?.changePassword.user) {
                router.push("/");
              }
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <TextField
                  label="كلمة المرور الجديدة"
                  name="newPassword"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                />
                {tokenError ? (
                  <div className="text-red-600">{tokenError}</div>
                ) : null}
                <button
                  type="submit"
                  className="bg-primary w-full mt-3 rounded-lg py-2 text-lg hover:bg-purple-900 transition-all"
                >
                  تأكيد
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

changePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default withUrqlClient(createUrqlClient)(changePassword);
