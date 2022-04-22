import React from "react";
import Cookies from 'universal-cookie';

export async function httpRegistration(name, password, navigate) {

    const cookies = new Cookies();

    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1/'
        }),
        body: JSON.stringify({
            'name': name,
            'password': password
        })
    };
    let response = await fetch('http://127.0.0.1:5000/debug', options);
    if (response.ok) {
        let json = await response.json();
        console.log(json)
    } else {
        console.log(await response.status)
    }
    navigate('/MainWindow');
}

export async function httpLogIn(name, password) {
    const uuid = name + '' + password
    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1/'
        }),
        body: JSON.stringify({
            'uuid': uuid
        })
    }
    let response = await fetch('http://127.0.0.1:5000/debug', options);
    if (response.ok) {
        return await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
export async function httpDelete(uuid) {
    const Profile = require("../data.json").Profiles.find(item => item.UUID === "wasd333")
    uuid = Profile.UUID
    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1/'
        }),
        body: JSON.stringify({
            "uuid": uuid
        })
    }
    let response = await fetch('http://127.0.0.1:5000/debug', options);
    if (response.ok) {
        return "Ok";
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
export async function httpFact() {
    const Profile = require("../data.json").Profiles.find(item => item.UUID === "wasd333")
    const uuid = Profile.UUID
    const fact = Profile.unlocked_items
    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1/'
        }),
        body: JSON.stringify({
            'uuid': uuid,
            'fact': fact
        })
    }
    let response = await fetch('http://127.0.0.1:5000/debug', options);
    if (response.ok) {
        return "Ok";
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}