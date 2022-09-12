import React from 'react';

type ContactMapPropsTyp = {
    width?: number
    height?: number
}

const ContactMap: React.FC<ContactMapPropsTyp> = ({width = 550,height = 450}) => {
    return (
        <div className='mb-[60px]'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18774.220867074695!2d39.72450546597429!3d43.60191811734673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5d4e111834423%3A0x6e6f61866a5d5df8!2sSochi%2C%20Krasnodar%20Krai!5e0!3m2!1sen!2sru!4v1662881375445!5m2!1sen!2sru"
                width={`${width}px`} height={`${height}px`} loading="lazy"
                title='gMap'
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactMap;