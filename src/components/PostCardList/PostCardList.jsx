import { useState, useEffect, useContext } from "react";
import PostCard from "../PostCard/PostCard";
import getPosts from "../../helpers/getPosts";
import PostLoader from "../Loaders/PostLoader";
import PostsContext from "../../contexts/PostsContext";

let dummyPost = {
                    "id": "685c662f97c41d2b6bbc05b6",
                    "image": "https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/4/59/45940eb2-5403-11e9-a843-db0e4491cc90/5ca13d8453042.image.jpg?resize=400%2C267",
                    "likes": 0,
                    "tags": [],
                    "text": "Linux Operating system",
                    "publishDate": "2025-06-25T21:12:15.301Z",
                    "updatedDate": "2025-06-25T21:12:15.301Z",
                    "owner": {
                        "id": "60d0fe4f5311236168a109ca",
                        "title": "ms",
                        "firstName": "Sara",
                        "lastName": "Andersen",
                        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
                    }
                };

function PostCardList({ numberOfPosts }) {
    const { posts, setPosts } = useContext(PostsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts(numberOfPosts)
        .then(res => {
                setPosts(res);
                setLoading(false);
        })
        .catch(console.error);
    }, [numberOfPosts]);

    if (loading) return (
        <div>
            {
                Array(numberOfPosts).fill().map((ele, idx) => <PostLoader key={idx} />)
            }
        </div>
    )
    
    return (
        <>
            {
                posts.map((post, idx) => <PostCard
                                            key = {post.id}
                                            postDetails = {post}
                                        />
                        )
            }
        </>
    );
}

export default PostCardList;
