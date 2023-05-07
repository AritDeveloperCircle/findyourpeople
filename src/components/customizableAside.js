import React from 'react';
import CustomizableAvatar from "./components/common/customavatar/CustomizableAvatar"

function CustomizableAside({asideCustomClass, src, height, width, alt, pContent, h2Content}) {

    return (
            <div className={asideCustomClass}>
                <CustomizableAvatar 
                src={src}
                height={height}
                width={width}
                alt={alt}
                />

                <h2>{h2Content}</h2>
                <p>{pContent}</p>
            </div>
        
        
    )

}
    


export default CustomizableAside
