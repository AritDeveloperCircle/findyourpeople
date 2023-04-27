import React from 'react';
import Image from 'next/image';
import styles from './customizableAside.module.css';

function CustomizableAside() {

    return (
            <div className={styles.asideContainer}>
                <div>
                    <Image src="/images/customizableAvatar.svg" width="110" height="110" priority  alt=''/>
                </div>

                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Sed ut perspiciatis  Nemo enim ipsam voluptatem  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam </p>
            </div>
        
        
    )

}
    


export default CustomizableAside
