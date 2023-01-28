import * as Yup from 'yup';

export const FeedBackValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Incorrect email')
        .required('Must be filled'),
    name: Yup.string()
        .required('Must be filled'),
    comments: Yup.string()
        .required('Must be filled')
});