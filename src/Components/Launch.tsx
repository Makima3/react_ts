import React from 'react';
import {ILaunch} from "../IInterfaces/LaunchInterf";
import {FC} from "react";

interface IProps {
    launch: ILaunch
}

export const Launch: FC<IProps> = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch
    return (
        <div>
            <div>Mission:{mission_name}</div>
            <div>Year:{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
            <hr/>
        </div>
    );
};

