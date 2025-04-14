import axios from "axios";

const API_KEY = "wxjuoow0jkbqf2ezy"
const BASE_URL = "https://techhk.aoscdn.com/"
export const enhancedImageAPI = async (file) => {
    try {
        // code to upload image
        const taskId = await uploadImage(file);

        //   /api/tasks / visual / scale

        // fetch enhanced image
        const enhancedImageData = await fetchEnhancedImage(taskId);
        return enhancedImageData;
        // /api/tasks/visual/scale/{task_id}  


    } catch (error) {
        console.log("error while fetching ", error.message)
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file)
    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    if (!data?.data?.task_id) {
        throw new Error("faild to upload image ! task id not found");

    }
    return data.data.task_id;
}
const fetchEnhancedImage = async (taskId, retries = 10, delay = 3000) => {
    for (let i = 0; i < retries; i++) {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
                headers: {
                    "X-API-KEY": API_KEY,
                },
            });
            if (data.data.image) {
                return data.data.image;
            }
            await new Promise((resolve) => setTimeout(resolve, delay))
        } catch (error) {
            console.error("polling error", error.message)

        }

    }
    throw new Error("image processing took too long")
};