import React, { useContext } from "react";
import { Image, Stack, Button } from "react-bootstrap";
import Histori from "../components/Histori";
import Revard from "../components/Revard";
import Cookies from 'universal-cookie';
import { httpDelete } from "../config/Requests";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../hooks/GetProfile";


const GetAchivement = (myAchievements) => {

  let a = [];

  myAchievements.forEach((el) => {
    if(el !== ""){
    const achievements = require("../achivements.json").find((item) => item.id === +el);
      a.push(
        <Revard
          value={{
            avatar: achievements.data.ava,
            title: achievements.data.title,
            body: achievements.data.body
          }}
        />
      );
    }
  });
  if (a === []) return
  else return a;
};

const GetHistories = (myHistory) => {
  let a = [];
  const Achivements = require("../items.json");
  myHistory.reverse()
  myHistory.forEach((el) => {
    if(el !== ""){
      const Achivement = Achivements.find((item) => item.id === +el);
    a.push(
      <Histori
        value={{
          avatar: Achivement.data.ava,
          title: Achivement.data.title,
          body: ""
        }}
      />
    );
    }
  });
  return a;
};

const DeleteProfile = (navigate, getprofile) => {
  
  const cookies = new Cookies()

  const uuid = cookies.get('profile', [true]).UUID
  let a = 0
  //httpDelete(uuid) === 0 ? a = 0 : a = 1
  if (a === 0){
    const Profile = cookies.get('profile', [true])
    Profile.UUID = 0;
    cookies.set('profile', Profile, { path:"/" })
  }
  console.log(cookies.get('profile', [true]))
  getprofile.GetProfile()
  navigate('/login')
}

const Profile = () => {
  const a = useContext(ProfileContext)
  const navigate = useNavigate()

  const img =
    "https://i.pinimg.com/originals/4b/ee/62/4bee62fe59c6c7ff150186a4318e3180.jpg";
  const ava =
    "https://funart.pro/uploads/posts/2021-07/1627167714_14-funart-pro-p-kot-v-pidzhake-zhivotnie-krasivo-foto-17.jpg";
  
  const cookies = new Cookies();
  const Profile = cookies.get('profile', [true])

  console.log(Profile)

  const Revards = GetAchivement(Profile.achievements.split(" "));
  const Histories = GetHistories(Profile.facts.split(" "));
  return (
    <div>
      <Image src={img} className="ProfileImage" />
      <div className="ProfileBlock">
        <Stack direction="horizontal" gap={3}>
          <Image src={ava} className="Avatar" />
          <div className="NameProfile">
            <h3>{Profile.name}</h3>
            Достижения: {Profile.achievements.split(" ").length}/42
          </div>
        </Stack>
        <div className="HistoryBlock">
          <h4>История:</h4>
          <div className="Histories">
            <Stack direction="vertical" gap={1}>
              {Histories}
            </Stack>
          </div>
        </div>
        <div className="RevardBlock">
          <h4>Достижения:</h4>
          <div className="Revards">
            <Stack direction="vertical" gap={1}>
              {Revards}
            </Stack>
          </div>
        </div>
        <div className="FooterProfile">
          <Button onClick={() => DeleteProfile(navigate, a)} className="DeleteProfileBTN" variant="outline-danger">Удалить профиль</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
