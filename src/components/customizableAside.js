import React from 'react'

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
