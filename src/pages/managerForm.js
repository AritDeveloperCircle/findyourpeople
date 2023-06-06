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

    const submitCommunity = () => {
        console.log("submitted the community")
    }

    const goHome = () => {
        console.log("routing to homepage")
    }

    return (
        <div>
            <NavBar />
            <h1 className={styles.firstBanner}>New Community</h1>
            <div className={styles.secondBanner}>
                <h2>Choose category(s)</h2>

                <div className={styles.secondBannerButtons}>
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClickProp={categoryChoice}
                        text="UI/UX"
                    />
                    
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClickProp={categoryChoice}
                        text="Frontend"
                    />
                    
                    <CustomizableButton
                        customClass={styles.highlightButton}
                        onClickProp={categoryChoice}
                        text="Software Engineering"
                    />

                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClickProp={categoryChoice}
                        text="Product Design"
                    />

                    <Image
                        src='/arrow-right-line.png'
                        width={25}
                        height={25}
                        alt='arrow pointing to the right'
                    />
                </div>

            </div>
            <container className={styles.communityLayout}>
                <div className={styles.layoutRow}>
                    <label>Community Name</label><input className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                <label>Community Manager</label><input className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label>Date Established</label><input className={styles.inputStyle} />
                </div >

                <div className={styles.layoutRow}>
                    <label>Location</label><input className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label>Community URL</label><input className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label>Community LinkedIn</label><input className={styles.inputStyle} />
                </div >

                <div className={styles.layoutRow}>
                    <label>Community Twitter</label><input className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label>Community Facebook</label><input className={styles.inputStyle} />
                </div>

                </container>

                <section className={styles.lowerHalfInput}>
                    <div className={styles.layoutRow}>
                        <label>Community Vision</label><input className={styles.inputStyle} />
                    </div>

                    <div className={styles.layoutRow}>
                        <label>Community Description</label><input className={styles.inputStyle} />
                    </div>
                </section>

                <section className={styles.imageUploadBackground}>
                    <div className={styles.uploadFileBackground}>
                        <h3>Add Image</h3>
                        <form className={styles.inputUploadFile}>
                            <label>Upload a File</label>
                            <input type='file' id='imageFile' name='imageFile' />
                            {/* <input type='submit'/> */}
                        </form>
                    </div>
                </section>

                <div className={styles.buttonsBottom}>
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClickProp={goHome}
                        text="Return to Home"
                    />
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClickProp={submitCommunity}
                        text="Submit"
                    />
                </div>

            <FooterBar />

        </div>
      
    )
  }
  
  export default managerForm
