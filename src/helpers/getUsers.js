import axios from 'axios';

async function getUsers(numberOfUsers) {
    let postsObj = await axios.get(`https://dummyapi.io/data/v1/user?limit=${numberOfUsers}`);
    return postsObj.data.data;
}


export default getUsers;
