import axios from "axios";

export const useCloudFunctions = () => {

    const handleUploadFile = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post('http://127.0.0.1:5001/yakkalabour/us-central1/uploadUsers', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('File upload failed:', error);
        }
    };

    return {
        handleUploadFile
    }
}
