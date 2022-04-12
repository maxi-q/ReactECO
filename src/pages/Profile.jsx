import React from 'react';
import { Image, Stack } from 'react-bootstrap'
import Histori from '../components/Histori';
import Revard from '../components/Revard'

const Getrevard = (block) => {
    let a=[]
    block.forEach(el => {
        a.push(<Revard value={{avatar: el.ava, title:el.title, body: el.body}}/>)
    });
    return a;
}
const GetHistories = (block) => {
    let a=[]
    block.forEach(el => {
        a.push(<Histori value={{avatar: el.ava, title:el.title, body: el.body}}/>)
    });
    return a;
}

const Profile = () => {
    const img = "https://i.pinimg.com/originals/4b/ee/62/4bee62fe59c6c7ff150186a4318e3180.jpg";
    const ava = "https://funart.pro/uploads/posts/2021-07/1627167714_14-funart-pro-p-kot-v-pidzhake-zhivotnie-krasivo-foto-17.jpg";
    const revards = 10;
    const revard = []
    const Profiles = require("../data.json")
    const Profile = Profiles[0]
    console.log(Profile)

    const histories = [
        {
            "ava": ava, 
            "title":"Волк",
            "body": ""
        },
        {
            "ava": ava, 
            "title":"Волколак",
            "body": ""
        }, 
        {
            "ava": ava, 
            "title":"Листик",
            "body": ""
        },
    ]

    let Revards = Getrevard(revard)
    let Histories = GetHistories(histories)
    return (
        <div>
            <Image src={img} className="ProfileImage"/>
            <div className="ProfileBlock">
                <Stack direction="horizontal" gap={3}>
                    <Image src={ava} className="Avatar"/>
                    <p className="NameProfile">
                        <h3>{Profile.name}</h3>
                        Достижения: {Profile.achivements.length}/42
                    </p>
                </Stack>
                <div className="RevardBlock">
                    <h4>Достижения:</h4>
                    <div className="Revards">
                        <Stack direction="vertical" gap={1}>
                            { Revards } 
                        </Stack>
                    </div>
                </div>
                <div className='HistoryBlock'>
                    <h4>История:</h4>
                    <div className='Histories'>
                        <Stack direction="vertical" gap={1}>
                            { Histories }
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;