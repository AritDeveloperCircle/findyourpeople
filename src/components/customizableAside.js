import React from 'react';
import CustomizableAvatar from "./common/customavatar/CustomizableAvatar"

function CustomizableAside({asideCustomClass, src, height, width, alt, paragraphText, headerText}) {

    return (
            <div className={asideCustomClass}>
                <CustomizableAvatar 
                src={src}
                height={height}
                width={width}
                alt={alt}
                />

                <h2>{paragraphText}</h2>
                <p>{headerText}</p>
            </div>
        
        
    )

}
    


export default CustomizableAside

