import {IUser} from "../../interfaces/userInterface";
import {FC} from "react";
import {User} from "./User";

interface IPops {
    users: IUser[]
}

export const Users: FC<IPops> = ({users}) => {

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};
