import axios from "axios";

async function createPost(postData) {
    const dataToSend = {
        owner: import.meta.env.VITE_USER_ID,
        text: postData.postText,
        image: postData.imageUrl
    }

    let response = await axios.post("https://dummyapi.io/data/v1/post/create", dataToSend);
    return response.data;
}


export default createPost;
