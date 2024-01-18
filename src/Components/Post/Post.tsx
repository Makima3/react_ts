import {IPost} from "../../Interfaces/PostInterface";
import {FC} from "react";

interface IProps{
    post: IPost
}

const Post: FC<IProps> = ({post}) => {

    const {id,userId,title,body} = post

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <hr/>
        </div>
    );
};

export {Post};

