import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import NavBar from '@/components/Header/NavBar';
import CustomizableButton from '@/components/common/CustomizableButton';
import FooterBar from '@/components/common/FooterBar';
import styles from '../styles/managerForm.module.css';
import { useCollection } from "@/hook/useCollection";
import { firebaseAuth, firebaseDb, firebaseStorage, fireStore } from '@/firebase/config';
import { firestore } from "firebase/firestore" ;
// import {doc, setDoc } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 


function ManagerForm() {

    const [formData, setFormData] = useState({
        community_name:"",
        community_manager:"",
        community_date:"",
        community_location:"",
        community_url:"",
        community_linkedin:"",
        community_twitter:"",
        community_facebook:"",
        community_vision:"",
        community_description:"",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const categoryChoice = () => {
        console.log("clicked the button")
    }

    // const db = firebaseDb

    const submitCommunity = async (event) => {
        event.preventDefault();

        try{
            // const docRef = 
            // await firebaseDb.collection('Listings').set(formData);
            // console.log('Document added with ID', docRef.id);

            const docRef = async () => {
                await addDoc(collection(firebaseDb, "Listings"), {
                name: {formData},
                manager: {formData}
                
            });
            console.log("Document writtern with ID:", docRef.id)
            }

        // Clear form fields
        setFormData({
            community_name: '',
            community_manager: '',
            community_date: '',
            community_location: '',
            community_url: '',
            community_linkedin: '',
            community_twitter: '',
            community_facebook: '',
            community_vision: '',
            community_description: '',
        });
    } catch (error) {
        console.error('Error submitting form:', error);
      }
        }


    const goHome = (event) => {
        event.preventDefault();
        alert("You went back to the home page!")
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
                        onClick={categoryChoice}
                        text="UI/UX"
                    />
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClick={categoryChoice}
                        text="Frontend"
                    />
                    <CustomizableButton
                        customClass={styles.highlightButton}
                        onClick={categoryChoice}
                        text="Software Engineering"
                    />
                    <CustomizableButton
                        customClass={styles.disableButton}
                        onClick={categoryChoice}
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

            <form 
            onSubmit={submitCommunity}
            action="/send-data-here" method="post">
            <container className={styles.communityLayout}>
                <div className={styles.layoutRow}>
                    <label
                        htmlFor='community_name'>Community Name
                    </label>
                    <input 
                    type='text' 
                    name='community_name' 
                    id='community_name' 
                    value={formData.community_name}
                    // onChange={e => setFormData(e.target.value)}
                    onChange={handleChange}
                    required 
                    className={styles.inputStyle}
                     />
                </div>
                <div className={styles.layoutRow}>
                <label htmlFor='community_manager'>Community Manager</label><input 
                type='text' name='community_manager' id='community_manager' value={formData.community_manager} 
                // onChange={e => setFormData(e.target.value)} 
                onChange={handleChange}
                required className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label htmlFor='community_date'>Date Established</label><input type='text' name='community_date' id='date' value={formData.community_date} onChange={e => setFormData(e.target.value)} className={styles.inputStyle} />
                </div >

                <div className={styles.layoutRow}>
                    <label htmlFor='community_location'>Location</label><input type='text' name='community_location' id='location' value={formData.community_location} onChange={e => setFormData(e.target.value)} className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label htmlFor='community_url'>Community URL</label><input type='url' name='community_url' id='community_url' value={formData.community_url} onChange={e => setFormData(e.target.value)} placeholder='https://example.com' pattern='https://.*' size='50'  required className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label htmlFor='community_linkedin'>Community LinkedIn</label><input type='text' name='community_linkedin' id='social_url' value={formData.community_linkedin} onChange={e => setFormData(e.target.value)} className={styles.inputStyle} />
                </div >

                <div className={styles.layoutRow}>
                    <label htmlFor='community_twitter'>Community Twitter</label><input type='text' name='community_twitter' id='social_url' value={formData.community_twitter} onChange={e => setFormData(e.target.value)} className={styles.inputStyle} />
                </div>
                <div className={styles.layoutRow}>
                    <label htmlFor='community_facebook'>Community Facebook</label><input type='text' name='community_facebook' id='social_url' value={formData.community_facebook} onChange={e => setFormData(e.target.value)} className={styles.inputStyle} />
                </div>

            </container>

                <section className={styles.lowerHalfInput}>
                    <div className={styles.layoutRow}>
                        <label htmlFor='community_vision'>Community Vision</label><input type='textarea' name='community_vision' id='community_vision' value={formData.community_vision} onChange={e => setFormData(e.target.value)} minLength={15} maxLength={300} rows={3} className={styles.inputStyle} />
                    </div>

                    <div className={styles.layoutRow}>
                        <label htmlFor='community_description'>Community Description</label>
                        <input 
                        type='textarea' 
                        name='community_description' 
                        id='description' 
                        value={formData.community_description} 
                        onChange={e => setFormData(e.target.value)} 
                        minLength={15} 
                        maxLength={300} rows={3} 
                        required 
                        className={styles.inputStyle} 
                        />
                    </div>
                </section>

                <section className={styles.imageUploadBackground}>
                    <div className={styles.uploadFileBackground}>
                        <h3>Add Image</h3>
                        <div className={styles.inputUploadFile}>
                            <Image
                                onClick={uploadFile}
                                src='/uploadFile.png'
                                height={20}
                                width={20}
                                alt='file upload icon'
                            />
                            <h3>Upload a File</h3>
                            <p>Drag and drop files here</p>
                        </div>

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
                            
                                <div className={styles.trashIcon} onClick={deleteFile}>
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
                    <button
                        customClass={styles.communityBottomButtons}
                        onClick={goHome}
                        text="Return to Home"
                        type="submit"
                    >Return to Home</button>
                    <button
                        customClass={styles.communityBottomButtons}
                        onClick={submitCommunity}
                        text="Submit"
                        type="submit"
                    >Submit</button>
                </div>
            </form>
            <FooterBar />

        </div>
      
    )
  }

  
  export default ManagerForm
