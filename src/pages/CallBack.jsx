import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { Button } from "react-bootstrap";

import { nameValid } from "../config/Validators";

const CallBack = () => {
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [nameDirty, setNameDirty] = useState(false);
  const [name, setName] = useState("");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameError(nameValid(e));
  };

  return (
    <div className="Callback">
      <div className="block">
        <h2>CallBack</h2>
        <div className="leftBlock">
          {nameDirty && nameError && (
            <div style={{ color: "red" }}>{nameError}</div>
          )}
          <Input
            inputContent={{
              value: name,
              handler: nameHandler,
              name: "name",
              blur: setNameDirty,
              content: "Код:"
            }}
          />
          <div className="Down">
            <Button className="Button" variant="outline-primary">
              Получить бонус
            </Button>{" "}
          </div>
        </div>
        <div className="rightBlock">
          <p>
            <span>Получи бонус</span>
            <br />
            Оставь свой код и получи крутой бонус. Уверяем тебя, этот код будет
            тебе полезен. В будущем при получении других бонусов будет
            использоваться именно твой код, как что будет замечательно, если ты
            заполнишь полк и заберещь свой бонус!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallBack;
