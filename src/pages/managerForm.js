import { useState, useRef } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'
import NavBar from '@/components/Header/NavBar';
import CustomizableButton from '@/components/common/CustomizableButton';
import FooterBar from '@/components/common/FooterBar';
import styles from '../styles/managerForm.module.css';
import { firebaseAuth, firebaseDb, firebaseStorage } from "@/firebase/config"
import { firestore, getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; 
import { ref, getStorage} from "firebase/storage";
import firebase from "firebase/app";
import "firebase/compat/storage";


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
    const [fileUpload, setFileUpload] = useState();

    const router = useRouter()

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const categoryChoice = () => {
        console.log("clicked the button")
    }

    const db = getFirestore();

    const storage = getStorage();

    const submitCommunity = async (event) => {
        event.preventDefault();
            const commCollectionRef = collection(db, "LISTINGS");
            getDocs(commCollectionRef)
                .then((snapshot) => {
                    let listing = []
                    snapshot.docs.forEach((doc) => {
                        listing.push({ ...doc.data(), id: doc.id})
                    })
                    console.log(listing)
                })
                .catch(error => {
                    console.error(error.message)
                });

            const docRef = async () => {
                await addDoc(commCollectionRef, {
                    community_name: setFormData.community_name.value,
                    community_manager: setFormData.community_manager.value,
                    community_date: setFormData.community_date.value,
                    community_location: setFormData.community_location.value,
                    community_url: setFormData.community_url.value,
                    community_linkedin: setFormData.community_linkedin.value,
                    community_twitter: setFormData.community_twitter.value,
                    community_facebook: setFormData.community_facebook.value,
                    community_vision: setFormData.community_vision.value,
                    community_description: setFormData.community_description.value,
                })
                .then(() => {
                    setFormData.reset("")
                })
                    console.log("Document writtern with ID:", docRef.id)
            }

        } 

    const imageUpload = async (file) => {
        // if (!file) return;

        try {
            const imageRef = firebase.storage().ref();
            const fileName = `${Date.now()}_${file.name}`;
            const fileRef = imageRef.child(fileName);
            await fileRef.put(file);
            const downloadURL = await fileRef.getDownloadURL();
            return downloadURL;
        } catch (error) {
            console.error("Error uploading image:", error)
            throw error;
        }
    } 

    const uploadFile = async (event, file) => {
        event.preventDefault()
        try {
            const downloadURL = await imageUpload(file)
            console.log("Image uploaded! Download URL:", downloadURL)
        } catch (error) {
            console.error("Error uploading image", error)
        }
    };

    const deleteFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const goHome = (event) => {
        event.preventDefault();
        <Link href="/" />
    }

    const fileInputRef = useRef(null);
    // const deleteFile = useRef(null) 
    

    return (
        <div>
            <NavBar />
            <h1 className={styles.firstBanner}>New Community</h1>
            <form 
                onSubmit={submitCommunity}
                action="/send-data-here" 
                method="POST"
            >
                <container className={styles.communityLayout}>
                    <div className={styles.layoutRow}>
                        <label 
                            htmlFor='community_name'
                        >Community Name<span>*</span>
                        </label>
                        <input 
                            type='text' 
                            name='community_name' 
                            id='community_name' 
                            value={formData.community_name}
                            onChange={handleChange}
                            required 
                            className={styles.inputStyle}
                        />
                    </div>
                    <div className={styles.layoutRow}>
                        <label 
                            htmlFor='community_manager_name'
                        >Community Manager
                        </label>
                        <input 
                            type='text' name='community_manager' id='community_manager' value={formData.community_manager}
                            onChange={handleChange}
                            required className={styles.inputStyle}
                        />
                    </div>
                    <div className={styles.layoutRow}>
                        <label 
                            htmlFor='community_url'
                        >Manager URL<span>*</span>
                        </label>
                        <input 
                            type='url' 
                            name='community_url' 
                            id='community_url' 
                            value={formData.community_url} 
                            onChange={handleChange} placeholder='https://example.com' pattern='https://.*' size='50'  required className={styles.inputStyle} 
                        />
                    </div>
                    <div className={styles.layoutRow}>
                        <label 
                            htmlFor='community_linkedin'
                        >Manager LinkedIn
                        </label>
                        <input 
                            type='text' 
                            name='community_linkedin' id='social_url' 
                            value={formData.community_linkedin} onChange={handleChange} 
                            className={styles.inputStyle} 
                        />
                    </div >

                    <div className={styles.layoutRow}>
                        <label htmlFor='community_twitter'
                        >Manager Twitter
                        </label>
                        <input 
                            type='text' 
                            name='community_twitter' id='social_url' 
                            value={formData.community_twitter} 
                            onChange={handleChange}
                            className={styles.inputStyle} 
                        />
                    </div>
                    <div className={styles.layoutRow}>
                        <label 
                            htmlFor='community_date'
                        >Year Established
                        </label>
                        <input 
                            type='text' 
                            name='community_date' 
                            id='date' 
                            value={formData.community_date} onChange={handleChange}
                            className={styles.inputStyle} 
                        />
                    </div >
                </container>

                <section className={styles.lowerHalfInput}>
                    <div className={styles.layoutRow}>
                        <label htmlFor='community_vision'
                        >Community Vision
                        </label>
                        <input 
                            type='textarea' 
                            name='community_vision' id='community_vision' 
                            value={formData.community_vision} 
                            onChange={handleChange}
                            minLength={15} 
                            maxLength={300} 
                            rows={3} 
                            className={styles.inputStyle} 
                        />
                    </div>
                    <div className={styles.layoutRow}>
                        <label htmlFor='community_description'
                        >Community Description<span>*</span>
                        </label>
                        <input 
                            type='textarea' 
                            name='community_description' 
                            id='description' 
                            value={formData.community_description} 
                            onChange={handleChange}
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
                        <div 
                            onChange={(event) => {setFileUpload(event.target.files[0])}}
                            onClick={imageUpload}
                            className={styles.inputUploadFile}>
                                <input 
                                    type="file"
                                    id="myImage"
                                    name="myImage"
                                    ref={fileInputRef}
                                    onChange={(event) => {setFileUpload(event.target.files[0])}}
                                />
                                <label htmlFor='myImage'>Upload a File</label>
                        </div>
                        <div className={styles.lowerFormIcons}>
                            <div 
                            onClick={uploadFile}
                            onChange={(event) => {setFileUpload(event.target.files[0])}} >
                                <input className={styles.submitFileButton} type="submit" />
                                <Image
                                    src='/uploadFile.png'
                                    height={20}
                                    width={20}
                                    alt='file upload icon'
                                    type="submit"
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
                    <button className={styles.returnButton}
                        onClick={() => router.push('/')}
                        text="Return to Home"
                        type="submit"
                    >
                    Return to Home
                    </button>
                    <CustomizableButton
                        customClass={styles.communityBottomButtons}
                        onClick={submitCommunity}
                        text="Submit"
                        type="submit"
                    />
                </div>
            </form>
            <FooterBar />
        </div>
    )
  }

  export default ManagerForm
