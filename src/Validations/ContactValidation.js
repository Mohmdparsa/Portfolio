import * as Yup from "yup";

export const ContactValidationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی میباشد"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی میباشد"),
  subject: Yup.string().required("نوشتن عنوان الزامی میباشد"),
  message: Yup.string().required("نوشتن پیام الزامی می باشد"),
});
