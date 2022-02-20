import React, {useEffect, useState} from 'react';
import {Button, Card, FormControl, InputGroup} from 'react-bootstrap/esm/index';
import GuestGuard from "../API/guestGuard";

const RegistrationWindow = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [name, setName] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [rePasswordDirty, setRePasswordDirty] = useState(false)

    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым")
    const [nameError, setNameError] = useState("Имя не может быть пустым")
    const [rePasswordError, setRePasswordError] = useState("Имя не может быть пустым")

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError || nameError || rePasswordError){
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    }, [emailError, passwordError, nameError, rePasswordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емайл')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 6 || e.target.value.length > 64) {
            setPasswordError('длина пароля не может быть меньше 6 и больше 64 символов')
            if(!e.target.value) {
                setPasswordError("Пароль не может быть пустым")
            }
        }else {
            setPasswordError('')
        }

    }

    const rePasswordHandler = (e) => {
        setRePassword(e.target.value)
        if(e.target.value !== password){
            setRePasswordError("Пароль должны совпадать")
            if(!e.target.value) {
                setRePasswordError("Пароль не может быть пустым")
            }
        }

        else {
            setRePasswordError('')
        }

    }
    const nameHandler = (e) => {
        setName(e.target.value)
        if(e.target.value.length < 6 || e.target.value.length > 64) {
            setNameError('длина поля не может быть меньше 6 и больше 64 символов')
            if(!e.target.value) {
                setNameError("поле не может быть пустым")
            }
        }else {
            setNameError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'rePassword':
                setRePasswordDirty(true)
                break
            default:
                break

        }
    }

    return (

        <Card style={{ width: '500px', margin: '10% 0 0 0'}}>
            <Card.Body>
                <div className="register">
                    <h1>Регистрация</h1>

                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <InputGroup className="mb-3">

                        <InputGroup.Text id="inputGroup-sizing-default">Имя</InputGroup.Text>
                        <FormControl
                            value={name}
                            onChange={e => nameHandler(e)}
                            name="name"
                            onBlur={e => blurHandler(e)}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <InputGroup className="mb-3">

                        <InputGroup.Text id="inputGroup-sizing-default">@</InputGroup.Text>
                        <FormControl
                            value={email}
                            onChange={e => emailHandler(e)}
                            name = "email"
                            onBlur={e => blurHandler(e)}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <InputGroup className="mb-3">

                        <InputGroup.Text id="inputGroup-sizing-default">Пароль</InputGroup.Text>
                        <FormControl
                            value={password}
                            onChange={e => passwordHandler(e)}
                            name = "password"
                            onBlur={e => blurHandler(e)}

                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    {(rePasswordDirty && rePasswordError) && <div style={{color:'red'}}>{rePasswordError}</div>}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Повторить пароль</InputGroup.Text>
                        <FormControl
                            value={rePassword}
                            onChange={e => rePasswordHandler(e)}
                            name="rePassword"
                            onBlur={e => blurHandler(e)}

                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <Button onClick={GuestGuard} disabled={!formValid} className="ButtonRegister" variant="outline-primary">Регистрация</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    );
};

export default RegistrationWindow;