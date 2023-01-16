import React, {useState} from 'react';
import s from './ContactMe.module.css'
import {useFormik} from 'formik';
import ContactMap from "./ContactMap";
import axios from 'axios';
import {apiConfig} from "../../config/config";
import ReCAPTCHA from "react-google-recaptcha";
import {ContactType} from '../../common/assets/data/dataSet';


type ContactMePropsType = {
    contacts: Array<ContactType>
}


const ContactMe = (props: ContactMePropsType) => {

    const [reCaptchaTest, setReCaptchaTest] = useState(false)

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

            console.log(apiConfig.SERVICE_ID)

            const data = {
                service_id: apiConfig.SERVICE_ID as string,
                template_id: apiConfig.TEMPLATE_ID as string,
                user_id: apiConfig.USER_ID as string,
                template_params: {
                    'name': JSON.stringify(values.name),
                    'email': JSON.stringify(values.email),
                    'phone': JSON.stringify(values.phone),
                    'subject': JSON.stringify(values.subject),
                    'comments': JSON.stringify(values.comments),

                    // 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                }
            };

            console.log(data)
            // dispatch(loginTC({email: values.login, password: values.password, rememberMe: values.rememberMe}))
            console.log('yoyoyo')
            axios({
                method: 'post',
                url: 'https://api.emailjs.com/api/v1.0/email/send',
                data,
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });

            actions.resetForm({values: {name: '', email: '', phone: '', subject: '', comments: ''}})

        }
    })
    // const errorHandler = () => {
    //     if (!!formik.errors.login && formik.touched.login && formik.errors.login) {
    //         openNotificationWithIcon('error', 'Incorrect login', formik.errors.login)}
    //     if (!!formik.errors.password && formik.touched.password && formik.errors.password) {
    //         openNotificationWithIcon('error', 'Incorrect password', formik.errors.password)}
    // }


    const onCaptchaTestPass = (value: any) => {
        console.log(value)
        setReCaptchaTest(true)
    }

    const mapWidthDeterminate = () => {
        // console.log(document.documentElement.clientWidth)
        if (document.documentElement.clientWidth < 500) {
            return [350, 300]
        } else {
            return [550, 450]
        }
    }

    return (
        <div className='h-full bg-background-gray flex justify-center'>
            <div className='flex flex-col w-[90%] h-[100%] items-start border-b-[1px] border-black'>
                <h2 className='text-[30px] pt-[100px] pb-[100px]'>CONTACT ME</h2>
                <div className='flex w-full flex-wrap justify-between'>
                    <div className='flex flex-col w-[40%]'>
                        <ContactMap width={mapWidthDeterminate()[0]} height={mapWidthDeterminate()[1]}/>
                    </div>
                    <div className='flex flex-wrap flex-col justify-start w-[50%]'>
                        <div className='w-full'>
                            <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                                <div className='flex mb-[15px]'>
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
                                <div className='flex mb-[15px]'>
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
                                    <textarea
                                        className="textarea rounded-[30px] px-[30px] w-full h-[150px] bg-white text-black"
                                        id="comments"
                                        placeholder="WRITE YOUR MESSAGE"
                                        onChange={formik.handleChange}
                                        value={formik.values.comments}
                                    ></textarea>
                                </div>
                                <ReCAPTCHA sitekey={apiConfig.CAPTCHA_SITE_KEY as string}
                                           onChange={onCaptchaTestPass}
                                           className='my-[20px]'/>
                                <button
                                    className={`btn mb-[60px] rounded-full ${true ? `w-[40%]` : `w-[0%] opacity-0`} hover:bg-white hover:text-black hover:border-white transition duration-700`}
                                    disabled={!reCaptchaTest} type='submit'>Submit
                                </button>
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