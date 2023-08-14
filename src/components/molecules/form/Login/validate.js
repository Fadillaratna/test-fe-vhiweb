import * as yup from 'yup';

const validationSchema = () => {
  return yup.object({
    email: yup.string().required("Email is required").email("Invalid Email"),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });
};

export { validationSchema };
