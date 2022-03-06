import Post from "./Post";
import { useCollection } from "react-firebase-hooks/firestore";
import {db} from '../fireBase'

function Posts({ posts }) {
    const [realtimePosts] = useCollection(
        
        db.collection("post").orderBy("timestamp", "desc")
    );
    console.log("db", db.collection("posts"))

    
    return (
        <div>
            {realtimePosts
                ? realtimePosts?.docs.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postImage}
                    />
                ))
                : posts.map((post) => (
                    <Post
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        email={post.email}
                        timestamp={post.timestamp}
                        image={post.image}
                        postImage={post.postImage}
                    />
                ))}
        </div>
    );
}

export default Posts;