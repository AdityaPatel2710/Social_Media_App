import axios from 'axios';

async function getUserData(userId) {
    let postsObj = await axios.get(`https://dummyapi.io/data/v1/user/${userId}`);
    return postsObj.data;
}


export default getUserData;
