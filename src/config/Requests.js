import Cookies from 'universal-cookie';
import { v5 as uuidv5 } from 'uuid';
import RegMemory from "./RegMemory";

export async function httpRegistration(name, password) {

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
        return await response.json().uuid;
    } else {
        return response.status
    }
}

export async function httpLogIn(name, password) {
    const uuid = uuidv5(name + password, uuidv5.DNS)
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
        console.log("Ошибка HTTP: " + response.status);
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
        console.log("Ошибка HTTP: " + response.status);
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