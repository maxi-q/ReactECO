import React, {useEffect, useState} from 'react';
import {Button, Card} from 'react-bootstrap/esm/index';
import httpGet from "../config/requests";
import Input from "../components/Input";

const RegistrationWindow = () => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емейл не может быть пустым');

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");

    const [rePassword, setRePassword] = useState('');
    const [rePasswordDirty, setRePasswordDirty] = useState(false);
    const [rePasswordError, setRePasswordError] = useState("Имя не может быть пустым");

    const [nameError, setNameError] = useState("Имя не может быть пустым");
    const [nameDirty, setNameDirty] = useState(false);
    const [name, setName] = useState('');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(emailError || passwordError || nameError || rePasswordError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError, rePasswordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емайл')
        } else {
            setEmailError('')
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 6 || e.target.value.length > 64) {
            setPasswordError('длина пароля не может быть меньше 6 и больше 64 символов')
            if(!e.target.value) {
                setPasswordError("Пароль не может быть пустым")
            }
        }else {
            setPasswordError('')
        }

    };

    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
        if(e.target.value !== password){
            setRePasswordError("Пароль должны совпадать");
            if(!e.target.value) {
                setRePasswordError("Пароль не может быть пустым")
            }
        }

        else {
            setRePasswordError('')
        }

    };
    const nameHandler = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 6 || e.target.value.length > 64) {
            setNameError('длина поля не может быть меньше 6 и больше 64 символов')
            if(!e.target.value) {
                setNameError("поле не может быть пустым")
            }
        }else {
            setNameError('')
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'rePassword':
                setRePasswordDirty(true);
                break;

        }
    };

    return (

        <Card style={{ width: '500px', margin: '10% 0 0 0'}} >
            <Card.Body>
                <div className="register">
                    <h1>Регистрация</h1>
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <Input inputContent={{value:name, handler: nameHandler, name:"name", blur: blurHandler, content: "Имя"}}/>

                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}

                    <Input inputContent={{value:email, handler: emailHandler, name:"email", blur: blurHandler, content: "@"}}/>


                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Input inputContent={{value:password, handler: passwordHandler, name:"password", blur: blurHandler, content: "Пароль"}}/>

                    {(rePasswordDirty && rePasswordError) && <div style={{color:'red'}}>{rePasswordError}</div>}
                    <Input inputContent={{value:rePassword, handler: rePasswordHandler, name:"rePassword", blur: blurHandler, content: "Повторить пароль"}}/>

                    <Button onClick={httpGet} disabled={!formValid} className="ButtonRegister" variant="outline-primary">Регистрация</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
};

export default RegistrationWindow;