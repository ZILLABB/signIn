import * as yup from "yup";

const passwordMatches = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordMatches, { message: "please create a stronger password" })
    .required("Required"),
});
