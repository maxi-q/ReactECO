import React, {useEffect, useState, useContext} from 'react';
import {Button, Card} from 'react-bootstrap/esm/index';
import {httpRegistration} from "../config/Requests";
import Input from "../components/Input";
import {emailValid, nameValid, passwordValid, rePasswordValid, rePasswordValidForPassword} from "../config/Validators";
import {useNavigate} from "react-router";
import { Link } from 'react-router-dom';
import RegMemory from "../config/RegMemory";
import { ProfileContext } from '../hooks/GetProfile'

const SignUp = () => {
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
    
    const profileContext = useContext(ProfileContext)

    let navigate = useNavigate();

    useEffect(() => {
        if(emailError || passwordError || nameError || rePasswordError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError, rePasswordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        setEmailError(emailValid(e));
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        setPasswordError(passwordValid(e))
        setRePasswordError(rePasswordValidForPassword(e, rePassword));

    };
    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
        setRePasswordError(rePasswordValid(e, password));

    };
    const nameHandler = (e) => {
        setName(e.target.value);
        setNameError(nameValid(e));
    };

    const RegProfile = (name, password, navigate) => {
        
        httpRegistration(name, password)
            .then((uuid) => {
                RegMemory({'name': name, 'uuid':uuid})
                navigate('/StartWindow')
                profileContext.GetProfile()
            })
            .catch((err)=>{
                console.error(err);
            })
            
    }

    return (

        <Card style={{ width: '500px', margin: '10% 0 0 0'}} >
            <Card.Body>
                <div className="register">
                    <Link to="/login"><h1>Регистрация</h1></Link>
                    
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <Input inputContent={{value:name, handler: nameHandler, name:"name", blur: setNameDirty, content: "Имя"}}/>

                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}

                    <Input inputContent={{value:email, handler: emailHandler, name:"email", blur: setEmailDirty, content: "@"}}/>


                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Input inputContent={{value:password, handler: passwordHandler, name:"password", blur: setPasswordDirty, content: "Пароль"}}/>

                    {(rePasswordDirty && rePasswordError) && <div style={{color:'red'}}>{rePasswordError}</div>}
                    <Input inputContent={{value:rePassword, handler: rePasswordHandler, name:"rePassword", blur: setRePasswordDirty, content: "Повторить пароль"}}/>

                    <Button onClick={() => RegProfile(name, password, navigate)} disabled={!formValid} className="ButtonRegister" variant="outline-primary">Регистрация</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
};

export default SignUp;