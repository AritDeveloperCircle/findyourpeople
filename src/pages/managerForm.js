import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import NavBar from '@/components/Header/NavBar';
import CustomizableButton from '@/components/common/CustomizableButton';
import FooterBar from '@/components/common/FooterBar';
import styles from '../styles/managerForm.module.css';


const managerForm = () => {
    
    const categoryChoice = () => {
        console.log("clicked the button")
    }
    return (
        <div>
            <NavBar />
            <h1 className={styles.textColor}>managerForm!!!</h1>
            <div className={styles.firstBanner}>New Community</div>
            <div className={styles.secondBanner}>
                <h2>Choose category(s)</h2>

                <div className={styles.secondBannerButtons}>
                    <button 
                        className={styles.disableButton}
                        onClick={() => console.log("clicked the button")} disabled
                    >UI/UX
                    </button>
                    <button 
                        className={styles.disableButton}
                        onClick={categoryChoice} disabled
                    >Frontend
                    </button>
                    <button 
                        className={styles.highlightButton}
                        onClick={categoryChoice} disabled
                    >Software Engineering
                    </button>
                    <button 
                        className={styles.disableButton}
                        onClick={categoryChoice} disabled
                    >Product Design
                    </button>

                    <Image
                        src='/arrow-right-line.png'
                        width={25}
                        height={25}
                        alt='arrow pointing to the right'
                    />
                    

                    <CustomizableButton
                        className={styles.disableButton}
                        // onClick={onClickProp}
                    >Frontend
                    </CustomizableButton>

                    <CustomizableButton
                        className={styles.disableButton}
                        // onClick={onClickProp}
                    >Software Engineering
                    </CustomizableButton>

                    <CustomizableButton
                        className={styles.disableButton}
                        // onClick={onClickProp}
                    >Product 
                    </CustomizableButton>
                </div>

                <div className={styles.communityGrid}>

                </div>
                
            </div>
            <FooterBar />
        </div>
      
    )
  }
  
  export default managerForm