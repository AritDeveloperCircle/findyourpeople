import React from 'react';
import Image from 'next/image';
import styles from './customizableAside.module.css';

function customizableAside() {

    return (
            <div className= {styles.aside-container}>
                <div className= {styles.aside-img}>
                    {customizableAvatar}
                </div>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam </p>
            </div>
        
        
    )

}
    


export default CustomizableAside
