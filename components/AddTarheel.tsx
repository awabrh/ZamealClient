import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import {
  CreatePostMutationVariables,
  FullRegisterInput,
  useCreatePostMutation,
  useRegisterMutation,
} from "../generated/graphql";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Select from "./Select";
import StepIndicator from "./StepIndicator";
import TextField from "./TextField";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "../utils/uploadImage";

type visisbility = "hidden" | "";

interface StepsVisibility {
  step1: visisbility;
  step2: visisbility;
  step3: visisbility;
}

const registerInitialValues: FullRegisterInput = {
  name: "",
  dep: "mechanical",
  batch: "016",
  gender: "male",
  address: "",
  mobile: "",
  email: "",
  password: "",
};

const TarheelInitialValues: CreatePostMutationVariables = {
  carModel: "",
  numberOfSeats: 4,
  isAcWorking: false,
  locations: "",
  price: 0,
  departure: "",
  arrival: "",
  days: [],
};

function AddTarheel() {
  //--------------------------------------------------------------------------------------
  const [image, setImage] = useState<File>();
  const [imageText, setImageText] = useState("اضغط هنا لرفع صورة للسيارة");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
  }, []);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop: onDrop,
    accept: {
      "image/*": [],
    },
  });

  //--------------------------------------------------------------------------------------

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [, register] = useRegisterMutation();
  const [, createPost] = useCreatePostMutation();

  const [steps, setSteps] = useState<StepsVisibility>({
    step1: "",
    step2: "hidden",
    step3: "hidden",
  });

  const nextStep = () => {
    image ? uploadImage(image) : null;

    if (step === 1) {
      setStep(2);
      setSteps({
        step1: "hidden",
        step2: "",
        step3: "hidden",
      });
    } else {
      setStep(3);
      setSteps({
        step1: "hidden",
        step2: "hidden",
        step3: "",
      });
    }
  };
  const back = () => {
    if (step === 2) {
      setStep(1);
      setSteps({
        step1: "",
        step2: "hidden",
        step3: "hidden",
      });
    } else {
      setStep(2);
      setSteps({
        step1: "hidden",
        step2: "",
        step3: "hidden",
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-10">
      <h2 className="text-4xl font-bold pb-6">إضافة ترحيل</h2>
      <StepIndicator step={step} />

      <Formik
        initialValues={registerInitialValues}
        onSubmit={(values) => {
          register({ ...values, mobile: values.mobile.toString() });
          console.log(values);
          nextStep();
        }}
      >
        {({ values, handleChange }) => (
          <Form className="">
            {/* ---------------------------------------step 1--------------------------------------- */}
            <div
              className={`${steps.step1} w-full flex flex-col gap-3 items-center pt-10`}
            >
              <TextField
                name="name"
                label="الاسم"
                type="text"
                value={values.name}
                onChange={handleChange}
              />
              <Select
                name="dep"
                label="القسم"
                value={values.dep}
                onChange={handleChange}
              >
                <option value="mechanical">الهندسة الميكانيكية</option>
                <option value="electrical">الهندسة الكهربائية</option>
                <option value="agricultural">الهندسة الزراعية</option>
              </Select>
              <Select
                name="batch"
                label="الدفعة"
                value={values.batch}
                onChange={handleChange}
              >
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
                <option value="020">020</option>
                <option value="021">021</option>
              </Select>
              <Select
                name="gender"
                label="الجنس"
                value={values.batch}
                onChange={handleChange}
              >
                <option value="male">ذكر</option>
                <option value="female">انثى</option>
              </Select>
              <TextField
                name="address"
                label="السكن"
                type="text"
                value={values.address}
                onChange={handleChange}
              />
              <TextField
                name="mobile"
                label="رقم الهاتف"
                type="number"
                value={values.mobile}
                onChange={handleChange}
              />
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
                value={values.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-primary mt-3 rounded-md px-8 pb-2 text-lg hover:bg-purple-900 transition-all"
              >
                تسجيل
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* ---------------------------------------step 2--------------------------------------- */}
      <Formik
        initialValues={TarheelInitialValues}
        onSubmit={(values) => {
          createPost({
            ...values,
            numberOfSeats: parseInt(values.numberOfSeats.toString()),
          });
        }}
      >
        {({ values, handleChange }) => (
          <Form className="w-full flex flex-col gap-3 items-center pt-10">
            <div
              className={`${steps.step2} w-full flex flex-col gap-3 items-center pt-10`}
            >
              <div
                {...getRootProps({
                  className:
                    "flex h-20 w-max items-center border-[1px] px-4 cursor-pointer",
                })}
              >
                <input {...getInputProps()} />
                {image ? (
                  <p>{image.name}</p>
                ) : (
                  <p>اضغط هنا لرفع صورة للسيارة</p>
                )}
              </div>
              <TextField
                name="carModel"
                label="موديل المركبة"
                type="text"
                value={values.carModel}
                onChange={handleChange}
              />
              <Select
                name="numberOfSeats"
                label="عدد المقاعد المتاحة"
                value={values.numberOfSeats}
                onChange={handleChange}
              >
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
              </Select>
              <Checkbox
                name="isAcWorking"
                text="هل يعمل المكيف ؟"
                onChange={handleChange}
              />
              {step === 2 && <Button label="متابعة" onClick={nextStep} />}
            </div>

            {/* ---------------------------------------step 3--------------------------------------- */}
            <div
              className={`${steps.step3} w-full flex flex-col gap-3 items-center pt-10`}
            >
              <TextField
                name="locations"
                label="ما المناطق التي تمر بها ؟"
                type="text"
                value={values.locations}
                onChange={handleChange}
              />
              <TextField
                name="price"
                label="السعر للراكب"
                type="number"
                value={values.price}
                onChange={handleChange}
              />
              <div className="flex max-w-sm gap-6">
                <TextField
                  name="departure"
                  label="زمن الذهاب"
                  type="time"
                  value={values.departure}
                  onChange={handleChange}
                />
                <TextField
                  name="arrival"
                  label="زمن الرجوع"
                  type="time"
                  value={values.arrival}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-3 items-center w-full max-w-sm">
                <p>الايام المتاحة:</p>
                <Checkbox
                  name="days"
                  type="checkbox"
                  value="sunday"
                  text="الاحد"
                />
                <Checkbox
                  name="days"
                  type="checkbox"
                  value="monday"
                  text="الاثنين"
                />
                <Checkbox
                  name="days"
                  type="checkbox"
                  value="tuesday"
                  text="الثلاثاء"
                />
                <Checkbox
                  name="days"
                  type="checkbox"
                  value="wednesday"
                  text="الاربعاء"
                />
                <Checkbox
                  name="days"
                  type="checkbox"
                  value="thursday"
                  text="الخميس"
                />
              </div>
              {step === 3 && (
                <>
                  <button
                    type="submit"
                    className="bg-primary mt-3 rounded-md px-8 pb-2 text-lg hover:bg-purple-900 transition-all"
                  >
                    اكمال
                  </button>
                  <h5
                    className="py-3 text-primary cursor-pointer hover:text-purple-900"
                    onClick={back}
                  >
                    رجوع
                  </h5>
                </>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddTarheel;
