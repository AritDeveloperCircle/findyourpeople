import Link from 'next/link';

// export const helperFile = () => {
export const imageUpload = async (file) => {
        try {
          const uploadpath = `thumbnails/community/3fF17YaSFLHgRgksgVU8/${file.name}`;
          const storageRef = ref(firebaseStorage, uploadpath);
          await uploadBytes(storageRef, file);
          return await getDownloadURL(storageRef);
        } catch (error) {
          console.error("Error uploading image:", error);
          throw error;
        }
      };
    
export const uploadFile = async (event, file) => {
        event.preventDefault();
        try {
          const downloadURL = await imageUpload(file);
          console.log("Image uploaded! Download URL:", downloadURL);
        } catch (error) {
          console.error("Error uploading image", error);
        }
      };
    
export const deleteFile = () => {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      };

export const resetInput = (event) => {
        event.preventDefault();
        setFormData(
          {
            community_name: "",
            community_manager: "",
            manager_url: "",
            manager_linkedin: "",
            manager_twitter: "",
            community_date: "",
            community_vision: "",
            community_description: "",
          }
        )
    }
    
export const goHome = (event) => {
        event.preventDefault();
        <Link href="/" />;
      };
