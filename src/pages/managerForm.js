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

    const uploadFile = () => {
        console.log("uploaded a file")
    }

    const deleteFile = () => {
        console.log("deleted a file")
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
                            <Image
                                onClick={uploadFile}
                                src='/uploadFile.png'
                                height={20}
                                width={20}
                                alt='file upload icon'
                            />
                            <h3>Upload a File</h3>
                            <p>Drag and drop files here</p>
                        </form>

                        <div className={styles.lowerFormIcons}>
                                <div onClick={uploadFile}>
                                    <p>Upload</p>
                                    <Image
                                        src='/uploadFile.png'
                                        height={20}
                                        width={20}
                                        alt='file upload icon'
                                    />
                                </div>
                            
                                <div classname={styles.trashIcon} onClick={deleteFile}>
                                    <p className={styles.deleteText}>Remove</p>
                                    <Image
                                        src='/delete-bin-2-line.png'
                                        height={20}
                                        width={20}
                                        alt='file upload icon'
                                    />
                                </div>
                            </div>
                    </div>
                </section>

                <div className={styles.buttonsBottom}>
                    <CustomizableButton
                        customClass={styles.communityBottomButtons}
                        onClickProp={goHome}
                        text="Return to Home"
                    />
                    <CustomizableButton
                        customClass={styles.communityBottomButtons}
                        onClickProp={submitCommunity}
                        text="Submit"
                    />
                </div>

            <FooterBar />

        </div>
      
    )
  }
  
  export default managerForm
