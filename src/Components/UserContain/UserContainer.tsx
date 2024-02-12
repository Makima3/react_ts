import {UserForm} from "./UserForm";
import {Users} from "./Users";
import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/userInterface";
import {userService} from "../../Services/userService";

export const UserContainer = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])


    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

