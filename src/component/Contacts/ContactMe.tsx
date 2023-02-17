import React, {useState} from 'react';
import s from './ContactMe.module.css'
import {useFormik} from 'formik';
import ContactMap from "./ContactMap";
import axios from 'axios';
import {apiConfig} from "../../config/config";
import ReCAPTCHA from "react-google-recaptcha";
import {ContactType} from '../../common/assets/data/dataSet';
import {blockId} from '../../App';
import {FeedBackValidationSchema} from "../../common/tools/validators/validatos";
import SnackBar from "../../common/universalComponent/SnackBar";
import { motion } from 'framer-motion';


type ContactMePropsType = {
    contacts: Array<ContactType>
    scrollCallback: (id: string) => void
}

const textAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.3 * (custom),
            duration: 2
        }
    })
}

const mapAnimation = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3 * (custom),
            duration: 2
        }
    })
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
        validationSchema: FeedBackValidationSchema,
        onSubmit: (values, actions) => {

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
                }
            };

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
    const errorHandler = () => {
        if (!!formik.errors.email && formik.touched.email && formik.errors.email) {
            return true
        }
        return false
    }


    const onCaptchaTestPass = () => {
        setReCaptchaTest(true)
    }

    const mapWidthDeterminate = () => {
        if (document.documentElement.clientWidth < 700) {
            return [350, 600]
        } else {
            return [650, 450]
        }
    }

    return (
        <motion.section
            initial='hidden' whileInView='visible' viewport={{amount: 0.2, once: true}}
            className={s.catchMEHereBlock}>
            <div className={s.contactMeBlock}>
                <div className={s.mainContainer}>
                    <motion.h2 variants={textAnimation} custom={1} className={s.title}>CONTACT ME</motion.h2>
                    <div className={s.contacts}>
                        <motion.div className={s.mapContainer} variants={mapAnimation} custom={1}>
                            <ContactMap width={mapWidthDeterminate()[0]} height={mapWidthDeterminate()[1]}/>
                        </motion.div>
                        <motion.div className={s.feedbackFormContainer} id={blockId.feedbackForm}
                                    variants={mapAnimation} custom={2}>
                            <form className={s.feedbackForm} onSubmit={formik.handleSubmit}>
                                <div className={s.nameContainer}>
                                    <input type="text"
                                           placeholder="FULL NAME"
                                           id="name"
                                        // className="input input-bordered px-[30px] w-full mr-[20px] max-w-xs rounded-full text-black-gray bg-white"
                                           className={`${s.inputBlock} + ${s.left}`}
                                           onChange={formik.handleChange}
                                           value={formik.values.name}
                                           required={true}
                                           onBlur={formik.handleBlur}
                                    />
                                    <input type="text"
                                           placeholder="EMAIL ADDRESS"
                                           id="email"
                                        // className="input input-bordered px-[30px] w-full max-w-xs rounded-full text-black bg-white"
                                           className={`${s.inputBlock} ${errorHandler() ? s.inputBlockError : ''}`}
                                           onChange={formik.handleChange}
                                           value={formik.values.email}
                                           required={true}
                                    />
                                </div>
                                <div className={s.phoneContainer}>
                                    <input type="text"
                                           placeholder="PHONE NUMBER"
                                           id="phone"
                                           className={`${s.inputBlock} + ${s.left}`}
                                           onChange={formik.handleChange}
                                           value={formik.values.phone}
                                    />
                                    <input type="text"
                                           placeholder="SUBJECT"
                                           id="subject"
                                           className={s.inputBlock}
                                           onChange={formik.handleChange}
                                           value={formik.values.subject}
                                    />
                                </div>
                                <div className={s.textAreaContainer}>
                                    <textarea
                                        className={s.textAreaBlock}
                                        id="comments"
                                        placeholder="WRITE YOUR MESSAGE"
                                        onChange={formik.handleChange}
                                        value={formik.values.comments}
                                        required={true}
                                    ></textarea>
                                </div>
                                <div className={s.buttonBlock}>
                                    <ReCAPTCHA sitekey={apiConfig.CAPTCHA_SITE_KEY as string}
                                               onChange={onCaptchaTestPass}
                                               className={s.captcha}/>
                                </div>
                                <div className={s.buttonBlock}>
                                    <button
                                        className={`${reCaptchaTest ? `w-[40%]` : `w-[0%] opacity-0`} + ${s.button}`}
                                        disabled={!reCaptchaTest} type='submit'>Submit

                                        {/*for localhost feedback form test without recaptcha*/}
                                        {/*className={`${true ? `w-[40%]` : `w-[0%] opacity-0`} + ${s.button}`}*/}
                                        {/*type='submit'>Submit*/}
                                    </button>

                                </div>
                            </form>
                        </motion.div>
                        <SnackBar error={errorHandler()}/>
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default ContactMe;