import axios from 'axios';

async function getPosts(numberOfPosts) {
    let postsObj = await axios.get(`https://dummyapi.io/data/v1/post?limit=${numberOfPosts}`);
    return postsObj.data.data;
}


export default getPosts;
