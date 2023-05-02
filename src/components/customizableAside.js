import React from 'react';
import Image from 'next/image';
import styles from './customizableAside.module.css';

function CustomizableAside({asideContainer, src, height, width, alt, h2Content, pContent }) {

    return (
            
            
            <div>
                className={asideContainer}
                <image 
                src={"/images/customizableAvatar.svg"}
                priority
                width={110}
                height={110}
                alt={"avatar"}
                />
                h2Content={"Lorem ipsum dolor sit amet"}
                pContent={"Sed ut perspiciatis  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam "}
            

            </div>

    )

    console.log("customizableAside");

}
    


export default CustomizableAside
