import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

interface searchProps {
  sameRow?: Boolean;
}

function SearchBar({ sameRow }: searchProps) {
  const router = useRouter();
  const layout = sameRow ? "flex-row-reverse" : "flex-col gap-4";

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={async (values) => {
        router.push(`/search?query=${values.search}`);
      }}
    >
      {({ values, handleChange }) => (
        <Form className={`flex justify-center ${layout} items-center`}>
          <div className="pr-4 flex justify-center" dir="ltr">
            <FiSearch
              size={20}
              className="relative text-[#fff4] top-2.5 left-7"
            />
            <input
              name="search"
              className="bg-black w-64 sm:w-96 h-10 rounded-md text-sm px-5 transition-all"
              placeholder="ساكن وين؟  جبل أولياء ، المهندسين ، الصافية ..."
              type="text"
              onChange={handleChange}
              value={values.search}
              dir="rtl"
            />
          </div>
          <Button label="بحث" type="submit"></Button>
        </Form>
      )}
    </Formik>
  );
}

export default SearchBar;
