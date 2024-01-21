import {useEffect, useState} from "react";
import {ILaunch} from "../IInterfaces/LaunchInterf";
import {spaceService} from "../Services/spaceService";
import {Launch} from "./Launch";

const Launches = () => {

    const [launches, setLaunches] = useState<ILaunch[]>([])

    useEffect(()=> {
        spaceService.getAll().then(({data})=>{
            const filtered = data.filter(item => item.launch_year !== "2020")
            setLaunches(filtered)
        })

    }, [])
    return (
        <div>
            {launches.map(launch => <Launch launch={launch} key={launch.mission_name}/>)}
        </div>
    );
};

export {Launches};

