import React, {useEffect, useState, useContext, useRef} from 'react';
import {nameValid, passwordValid} from "../config/Validators";
import {Button, Card} from "react-bootstrap";
import Input from "../components/Input";
import {useNavigate} from "react-router";
import Cookies from 'universal-cookie';
import { httpLogIn } from '../config/Requests';
import { ProfileContext } from '../hooks/GetProfile'
import { Link } from 'react-router-dom';


const LogIn = () => {
    const a = useContext(ProfileContext)
    const cookies = new Cookies();
    const [profile, setProfile] = useState(cookies.get('profile', [true]))

    const profileContext = useContext(ProfileContext)

    console.log(profile)

    const GetProfile = ( name, password ) => {
        //const profile = {
        //        "UUID": uuidv5(name + password, uuidv5.DNS),
        //        "name": name,
        //        "achivements": "",
        //        "friends": "",
        //        "unlocked_items": ""
        //    }
        //    setProfile(profile)
            
            httpLogIn(name, password)
                .then(json => {
                    setProfile(json)
                    profileContext.GetProfile()
                })
    }


    const navigate = useNavigate();

    const setCokies = (profile) => {
        cookies.set('profile', profile, { path: '/', maxAge: 9999 });
        a.GetProfile()
    }
    const firstUpdate = useRef(true);
    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
        } else {
        setCokies(profile)
        navigate('/StartWindow')
        }
    },[profile])

    const [nameError, setNameError] = useState("Имя не может быть пустым");
    const [nameDirty, setNameDirty] = useState(false);
    const [name, setName] = useState('');

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");

    const [formValid, setFormValid] = useState(false);


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
                    <Link to="/signup"><h1>Вход</h1></Link>
                    
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <Input inputContent={{value:name, handler: nameHandler, name:"name", blur: setNameDirty, content: "Имя"}}/>



                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Input inputContent={{value:password, handler: passwordHandler, name:"password", blur: setPasswordDirty, content: "Пароль"}}/>


                    <Button onClick={() => {GetProfile(name, password)}} disabled={!formValid} className="ButtonRegister" variant="outline-primary">Вход</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
};

export default LogIn;