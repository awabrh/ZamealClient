import { ErrorMessage, Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import {
  CreatePostMutationVariables,
  FullRegisterInput,
  useCreatePostMutation,
  useMeQuery,
  useRegisterMutation,
} from "../generated/graphql";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Select from "./Select";
import StepIndicator from "./StepIndicator";
import TextField from "./TextField";
import { uploadImage } from "../utils/uploadImage";
import { SignupSchema, PostSchema } from "../utils/formValidation";
import { toErrorMap } from "../utils/toErrorMap";
import ImageDropzone from "./ImageDropzone";
import { useRouter } from "next/router";
import ContactField from "./ContactField";
import { arabicCollege, collegeDeps } from "../utils/colleges";

type visisbility = "hidden" | "";

interface StepsVisibility {
  step1: visisbility;
  step2: visisbility;
  step3: visisbility;
}

const registerInitialValues: FullRegisterInput = {
  name: "",
  college: "engineering",
  dep: "mechanical",
  batch: "016",
  gender: "male",
  address: "",
  mobile: "",
  email: "",
  password: "",
};

const tarheelInitialValues: CreatePostMutationVariables = {
  imageId: "",
  carModel: "",
  numberOfSeats: 4,
  isAcWorking: false,
  locations: "",
  price: 0,
  departure: "",
  arrival: "",
  days: [],
};

type setErrorFunction = (field: string, message: string | undefined) => void;
type validateFieldFunction = (field: string) => void;

function AddTarheel() {
  const router = useRouter();

  //--------------------------------------------------------------------------------------
  const [imageId, setImageId] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [depOptions, setDepOptions] = useState<string[]>(
    collegeDeps.engineering
  );

  //--------------------------------------------------------------------------------------
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  });

  const [{ data, fetching }] = useMeQuery({
    pause: isServer,
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [, register] = useRegisterMutation();
  const [, createPost] = useCreatePostMutation();

  const [steps, setSteps] = useState<StepsVisibility>({
    step1: "",
    step2: "hidden",
    step3: "hidden",
  });

  useEffect(() => {
    if (data?.me && !data?.me?.post) {
      setStep(2);
      setSteps({
        step1: "hidden",
        step2: "",
        step3: "hidden",
      });
    } else {
      setStep(1);
      setSteps({
        step1: "",
        step2: "hidden",
        step3: "hidden",
      });
    }
  }, [data]);

  const nextStep = () => {
    console.log(imageId);

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

  const toSecondStep = async (
    setError: setErrorFunction,
    validateField: validateFieldFunction,
    errors: FormikErrors<typeof tarheelInitialValues>
  ) => {
    validateField("carModel");
    validateField("numberOfSeats");

    if (!image) {
      setError("imageId", "الرجاء تحميل صورة");
      return;
    } else {
      const id = await uploadImage(image);
      if (!id) {
        setError("imageId", "حدثت مشكلة في الشبكة");
        console.log("no internet error");
        return;
      } else {
        setImageId(id);
      }
    }

    if (errors.carModel) return;

    nextStep();
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
      {fetching ? (
        <p>جاري التحميل ...</p>
      ) : (
        <>
          <h2 className="text-4xl font-bold pb-6">إضافة ترحيل</h2>
          <StepIndicator step={step} />

          {/* ---------------------------------------step 1--------------------------------------- */}
          <Formik
            initialValues={registerInitialValues}
            onSubmit={async (values, { setErrors }) => {
              const response = await register({
                ...values,
                mobile: values.mobile.toString(),
              });
              if (response.data?.register.errors) {
                console.log(values);
                await setErrors(toErrorMap(response.data.register.errors));
              } else {
                console.log(values);
                nextStep();
              }
            }}
            validationSchema={SignupSchema}
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
                    name="college"
                    label="الكلية"
                    value={values.college}
                    onChange={handleChange}
                  >
                    <option value="engineering">الهندسة</option>
                    <option value="architecture">العمارة</option>
                    <option value="science">العلوم</option>
                    <option value="arts">ادآب</option>
                    <option value="economics">الاقتصاد</option>
                    <option value="law">القانون</option>
                    <option value="geography">الجغرافيا</option>
                  </Select>
                  <Select
                    name="dep"
                    label="القسم"
                    value={values.dep}
                    onChange={handleChange}
                    setOptions={setDepOptions}
                  >
                    {depOptions.map((value, index) => {
                      return (
                        <option value={value} key={index}>
                          {arabicCollege.get(value)}
                        </option>
                      );
                    })}
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
                    <option value="021">022</option>
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
                  <ContactField
                    label="وسيلة تواصل"
                    name="mobile"
                    type="text"
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
            initialValues={tarheelInitialValues}
            onSubmit={async (values, { setFieldError }) => {
              const response = await createPost({
                ...values,
                numberOfSeats: parseInt(values.numberOfSeats.toString()),
                imageId: imageId,
              });
              if (response.error) {
                setFieldError(
                  "isAcWorking",
                  "يبدو ان هنالك خطأ ، الرجاء المحاولة لاحقاً"
                );
              } else {
                router.push(`/post/${response.data?.createPost.id}`);
              }
            }}
            validationSchema={PostSchema}
          >
            {({
              setFieldError,
              validateField,
              errors,
              values,
              handleChange,
            }) => (
              <Form className="w-full flex flex-col gap-3 items-center pt-10">
                <div
                  className={`${steps.step2} w-full flex flex-col gap-3 items-center pt-10`}
                >
                  <ImageDropzone
                    name="imageId"
                    type={"file"}
                    image={image}
                    setImage={setImage}
                  />
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
                  {step === 2 && (
                    <Button
                      label="متابعة"
                      onClick={async () =>
                        await toSecondStep(setFieldError, validateField, errors)
                      }
                      type="button"
                    />
                  )}
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
                    <ErrorMessage
                      component="div"
                      name="days"
                      className="text-red-600"
                    />
                  </div>

                  <ErrorMessage
                    component="div"
                    name="isAcWorking"
                    className="text-red-600"
                  />
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
        </>
      )}
    </div>
  );
}

export default AddTarheel;
