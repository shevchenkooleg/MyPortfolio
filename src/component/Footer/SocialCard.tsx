import React from 'react';
import {SocialCardsType} from "../../common/assets/data/dataSet";

type SocialCardPropsType = {
    card: SocialCardsType
}

const SocialCard: React.FC<SocialCardPropsType> = ({card}) => {

    const {logo, altLogo, link} = card

    const onLinkClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault()
        window.open(link)
    }

    return (
        <div className='cursor-pointer'>
            <a onClick={(e)=>{onLinkClickHandler(e, link)}}><img src={logo} alt={altLogo} width={'30px'} height={'30px'}/></a>
        </div>
    );
};

export default SocialCard;