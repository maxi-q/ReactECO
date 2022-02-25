import React, {useEffect, useState} from 'react';
import {nameValid, passwordValid} from "../config/Validators";
import {Button, Card} from "react-bootstrap";
import Input from "../components/Input";
import httpPost from "../config/Requests";
import {useNavigate} from "react-router";
import Login from "../config/Login";

const LogIn = () => {
    const [nameError, setNameError] = useState("Имя не может быть пустым");
    const [nameDirty, setNameDirty] = useState(false);
    const [name, setName] = useState('');

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");

    const [formValid, setFormValid] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        if( passwordError || nameError ){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [ passwordError, nameError ]);

    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError(nameValid(e));
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        setPasswordError(passwordValid(e))

    };

    return (
        <Card style={{ width: '500px', margin: '10% 0 0 0'}} >
            <Card.Body>
                <div className="register">
                    <h1>Регистрация</h1>
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <Input inputContent={{value:name, handler: nameHandler, name:"name", blur: setNameDirty, content: "Имя"}}/>



                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Input inputContent={{value:password, handler: passwordHandler, name:"password", blur: setPasswordDirty, content: "Пароль"}}/>


                    <Button onClick={() => Login(name, password, navigate)} disabled={!formValid} className="ButtonRegister" variant="outline-primary">Вход</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
};

export default LogIn;