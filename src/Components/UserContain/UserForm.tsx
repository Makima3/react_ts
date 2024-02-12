import {FC} from "react";
import {IUser} from "../../interfaces/userInterface";
import {SubmitHandler, useForm} from "react-hook-form";
import {userService} from "../../Services/userService";
import {ISetState} from "../../types/setStateType";

interface IProps {
    setUsers: ISetState<IUser[]>
}

export const UserForm: FC<IProps> = ({setUsers}) => {

    const {reset, handleSubmit, register} = useForm<IUser>()

    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await userService.create(user)
        setUsers(prevState => [...prevState, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};



