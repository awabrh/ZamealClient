import * as Yup from "yup";

const mobilePattern = /0(9|1)[0-9]{8}/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "لا يمكن ان يكون الاسم اقل من حرفين")
    .max(15, "رجاء لا تستخدم اسم اطول من 15 حرفاً")
    .required("هذه الخانة مطلوبة"),
  email: Yup.string()
    .email("ايميل غير صالح")
    .required("هذه الخانة مطلوبة")
    .lowercase(),
  dep: Yup.string().required("هذه الخانة مطلوبة"),
  batch: Yup.string().required("هذه الخانة مطلوبة"),
  gender: Yup.string().required("هذه الخانة مطلوبة"),
  address: Yup.string().required("هذه الخانة مطلوبة"),
  mobile: Yup.string().required("هذه الخانة مطلوبة"),
  password: Yup.string()
    .required("هذه الخانة مطلوبة")
    .min(8, "لا يمكن ان تكون كلمة المرور أقل من 8 أحرف"),
});
