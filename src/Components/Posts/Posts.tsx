import {useEffect, useState} from "react";
import {IPost} from "../../Interfaces/PostInterface";
import {postService} from "../../services/postService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {

    const[posts, setPosts]= useState <IPost[]>([])
    const [postDetails, setPostDetails] = useState(null)

    const click = async (postId: number):Promise <void> =>{
        const {data} = await postService.getById(postId)
        setPostDetails(data)
    }


    useEffect(()=>{
        postService.getAll().then(({data})=> setPosts(data))

    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export {Posts};

