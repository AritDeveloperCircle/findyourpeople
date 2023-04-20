import React from 'react';
import Image from 'next/image';
import styles from './aside.module.css';

const CustomizableAside = ({CustomizedAvatar, asideTitle , asideParagraph,...props}) => {
    return (
        <div {...props}>
            <div> {CustomizedAvatar}</div>
            <h2> {asideTitle} </h2>
            <p> {asideParagraph} </p>
        </div>
        
    )
}

export default CustomizableAside
