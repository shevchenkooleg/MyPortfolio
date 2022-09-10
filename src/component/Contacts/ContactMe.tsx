import React from 'react';
import s from './ContactMe.module.css'
import {ContactType} from "../../App";
import { useFormik } from 'formik';
import ContactMap from "./ContactMap";

type ContactMePropsType = {
    contacts: Array<ContactType>
}


const ContactMe = (props:ContactMePropsType) => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            comments: '',
        },
        // validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            // dispatch(loginTC({email: values.login, password: values.password, rememberMe: values.rememberMe}))
            console.log('yoyoyo')
            actions.resetForm({values:{name:'', email:'',phone:'',subject:'',comments:''}})

        }
    })
    // const errorHandler = () => {
    //     if (!!formik.errors.login && formik.touched.login && formik.errors.login) {
    //         openNotificationWithIcon('error', 'Incorrect login', formik.errors.login)}
    //     if (!!formik.errors.password && formik.touched.password && formik.errors.password) {
    //         openNotificationWithIcon('error', 'Incorrect password', formik.errors.password)}
    // }


    return (
        <div className='h-full bg-background-gray flex justify-center'>
            <div className='flex flex-col w-[90%] h-[100%] items-start border-b-[1px] border-black'>
                <h2 className='text-[30px] pt-[100px] pb-[100px]'>CONTACT ME</h2>
                <div className='flex w-full flex-wrap justify-between'>
                    <div className='flex flex-col'>
                        <ContactMap/>
                    </div>
                    <div className='flex flex-wrap flex-col justify-center'>
                        <div className='w-full'>
                            <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                                <div className='flex mb-[10px]'>
                                    <input type="text"
                                           placeholder="FULL NAME"
                                           id="name"
                                           className="input input-bordered px-[30px] w-full mr-[20px] max-w-xs rounded-full text-black-gray bg-white"
                                           onChange={formik.handleChange}
                                           value={formik.values.name}

                                    />
                                    <input type="text"
                                           placeholder="EMAIL ADDRESS"
                                           id="email"
                                           className="input input-bordered px-[30px] w-full max-w-xs rounded-full text-black bg-white"
                                           onChange={formik.handleChange}
                                           value={formik.values.email}
                                    />
                                </div>
                                <div className='flex mb-[10px]'>
                                    <input type="text"
                                           placeholder="PHONE NUMBER"
                                           id="phone"
                                           className="input input-bordered px-[30px] w-full mr-[20px] max-w-xs rounded-full text-black bg-white"
                                           onChange={formik.handleChange}
                                           value={formik.values.phone}
                                    />
                                    <input type="text"
                                           placeholder="SUBJECT"
                                           id="subject"
                                           className="input input-bordered px-[30px] w-full max-w-xs rounded-full text-black bg-white"
                                           onChange={formik.handleChange}
                                           value={formik.values.subject}
                                    />
                                </div>
                                <div className='flex mb-[10px]'>
                                    <textarea className="textarea text-white rounded-[30px] px-[30px] w-full h-[150px] bg-white text-black "
                                              id="comments"
                                              placeholder="WRITE COMMENTS"
                                              onChange={formik.handleChange}
                                              value={formik.values.comments}
                                    ></textarea>
                                </div>
                                <button className="btn mb-[60px] rounded-full w-[40%] hover:bg-white hover:text-black hover:border-white" type='submit'>Submit</button>
                            </form>
                        </div>


                        <div className={s.btnContainer}>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;