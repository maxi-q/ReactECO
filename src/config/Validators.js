import React from 'react';

export const emailValid = (e) => {

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
        return('Некорректный емайл')
    } else {
        return('')
    }
}
export const passwordValid = (e) => {
    if(e.target.value.length < 6 || e.target.value.length > 64) {
        return('длина пароля не может быть меньше 6 и больше 64 символов')
        if(!e.target.value) {
            return("Пароль не может быть пустым")
        }
    }else {
        return('')
    }
}
export const rePasswordValidForPassword = (e, rePassword) => {
    if(e.target.value !== rePassword) {
        return("Пароль должны совпадать");
    } else {
        return('')
    }
}
export const rePasswordValid =(e, password) => {
    if(e.target.value !== password) {
        return("Пароль должны совпадать");
    } else {
        return('')
    }
}
export const nameValid = (e) => {
    if(e.target.value.length < 6 || e.target.value.length > 64) {
        return('длина поля не может быть меньше 6 и больше 64 символов')
        if(!e.target.value) {
            return("поле не может быть пустым")
        }
    }else {
        return('')
    }
}