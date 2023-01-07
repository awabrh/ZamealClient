import * as Yup from "yup";

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

export const PostSchema = Yup.object().shape({
  carModel: Yup.string().required("هذه الخانة مطلوبة"),
  numberOfSeats: Yup.number().max(4, "لا يمكنك اختيار اكثر من اربع مقاعد"),
  locations: Yup.string().required("هذه الخانة مطلوبة"),
  price: Yup.number()
    .max(70000, " 😅هذا السعر عالي جداً")
    .required("هذه الخانة مطلوبة"),
  departure: Yup.string().required("هذه الخانة مطلوبة"),
  arrival: Yup.string().required("هذه الخانة مطلوبة"),
  days: Yup.array(Yup.string())
    .min(1, "قم باختيار يوم واحد على الاقل")
    .required("هذه الخانة مطلوبة"),
});
