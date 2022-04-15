import React from "react";
import { Image, Stack } from "react-bootstrap";
import Histori from "../components/Histori";
import Revard from "../components/Revard";

const GetAchivement = (_myAchivements) => {
  let a = [];
  const Achivements = require("../achivements.json");

  _myAchivements.forEach((el) => {
    const Achivement = Achivements.find((item) => item.id === +el);
    a.push(
      <Revard
        value={{
          avatar: Achivement.data.ava,
          title: Achivement.data.title,
          body: Achivement.data.body
        }}
      />
    );
  });
  return a;
};

const GetHistories = (_myHistory) => {
  let a = [];
  const Achivements = require("../items.json");
  _myHistory.forEach((el) => {
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
  });
  return a;
};

const Profile = () => {
  const img =
    "https://i.pinimg.com/originals/4b/ee/62/4bee62fe59c6c7ff150186a4318e3180.jpg";
  const ava =
    "https://funart.pro/uploads/posts/2021-07/1627167714_14-funart-pro-p-kot-v-pidzhake-zhivotnie-krasivo-foto-17.jpg";
  const Profiles = require("../data.json");
  const Profile = Profiles.find((item) => item.UUID === "wasd333");

  const Revards = GetAchivement(Profile.achivements.split(" "));
  const Histories = GetHistories(Profile.unlocked_items.split(" "));
  return (
    <div>
      <Image src={img} className="ProfileImage" />
      <div className="ProfileBlock">
        <Stack direction="horizontal" gap={3}>
          <Image src={ava} className="Avatar" />
          <div className="NameProfile">
            <h3>{Profile.name}</h3>
            Достижения: {Profile.achivements.split(" ").length}/42
          </div>
        </Stack>
        <div className="RevardBlock">
          <h4>Достижения:</h4>
          <div className="Revards">
            <Stack direction="vertical" gap={1}>
              {Revards}
            </Stack>
          </div>
        </div>
        <div className="HistoryBlock">
          <h4>История:</h4>
          <div className="Histories">
            <Stack direction="vertical" gap={1}>
              {Histories}
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
