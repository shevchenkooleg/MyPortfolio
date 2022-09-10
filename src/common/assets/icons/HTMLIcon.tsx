import React, {SVGProps} from 'react'

const HtmlIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg height="110px" width="110px" viewBox="4 5 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" fill="#E65100"/>
            <path d="M24 8L24 39.9 35.2 36.7 37.7 8z" fill="#FF6D00"/>
            <path d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" fill="#FFF"/>
            <path d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" fill="#EEE"/>
        </svg>
    );
};

export default HtmlIcon;