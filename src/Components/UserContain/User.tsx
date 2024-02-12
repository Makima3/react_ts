import {FC} from "react";
import {IUser} from "../../interfaces/userInterface";

interface IProps {
    user: IUser
}

export const User: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div> Surname: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};
