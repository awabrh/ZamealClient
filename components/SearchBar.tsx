import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { FiSearch } from "react-icons/fi";
import login from "../pages/login";
import search from "../pages/search";
import { toErrorMap } from "../utils/toErrorMap";
import Button from "./Button";
import TextField from "./TextField";

interface searchProps {
  withSubmit?: Boolean;
}

function SearchBar({ withSubmit }: searchProps) {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={async (values, { setErrors }) => {}}
    >
      {({ values, handleChange }) => (
        <Form className="flex justify-center flex-row-reverse items-center">
          <div className="pr-4 flex justify-center" dir="ltr">
            <FiSearch
              size={20}
              className="relative text-[#fff4] top-2.5 left-7"
            />
            <input
              name="search"
              className="bg-black w-5/6 sm:w-96 h-10 rounded-md text-sm px-5 transition-all"
              placeholder="ساكن وين؟  جبل أولياء ، المهندسين ، الصافية ..."
              type="text"
              onChange={handleChange}
              value={values.search}
              dir="rtl"
            />
          </div>
          {withSubmit ? <Button label="بحث" type="submit"></Button> : null}
        </Form>
      )}
    </Formik>
  );
}

export default SearchBar;
