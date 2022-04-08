import React from 'react';
import { Image, Stack } from 'react-bootstrap'
import Revard from '../components/Revard'

const Profile = () => {
    const img = "https://i.pinimg.com/originals/4b/ee/62/4bee62fe59c6c7ff150186a4318e3180.jpg";
    const ava = "https://funart.pro/uploads/posts/2021-07/1627167714_14-funart-pro-p-kot-v-pidzhake-zhivotnie-krasivo-foto-17.jpg";
    const revards = 10;
    return (
        <div>
            <Image src={img} className="ProfileImage"/>
            <div className="ProfileBlock">
                <Stack direction="horizontal" gap={3}>
                    <Image src={ava} className="Avatar"/>
                    <p className="NameProfile">
                        <h3>Никнейм</h3>
                        Достижения: {revards}/42
                    </p>
                </Stack>
                <div className="HistoryBlock">
                    <h4>История:</h4>
                    <div className="Histories">
                        <Revard value={{avatar: ava, title:"Покормить кота", body: "Найти кота в карточках и покормитт его силой воображения"}}/>
                        <Revard value={{avatar: ava, title:"Поймать слона", body: "Найти слона и поймать его сетью для аллигаторов"}}/>
                        <Revard value={{avatar: ava, title:"Найти оленя", body: "Посмотреть на оленя"}}/>
                        <Revard value={{avatar: ava, title:"Поймать себя", body: "Залезть в мешок"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;