import {IPost} from "../../Interfaces/PostInterface";
import {FC} from "react";

interface IProps{
    post: IPost,
    click:(id: number) => Promise <void>
}

const Post: FC<IProps> = ({post, click}) => {

    const {id,userId,title,body} = post

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => click(id)}>Post details</button>
            <hr/>
            <hr/>
        </div>
    );
};

export {Post};

