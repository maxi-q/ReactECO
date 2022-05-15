import Cookies from 'universal-cookie';
import { v5 as uuidv5 } from 'uuid';

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
    await fetch('http://127.0.0.2:5000/signUp', options)
        .then((json) => {
            console.log(json.status)
            console.log(json)
            console.log(json.headers.get('uuid'))
        })
        .catch((err) => {
            console.log(err)
        })
        
        
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
    await await fetch('http://127.0.0.2:5000/logIn', options)
    .catch((err) => {
        console.log(err.status)
    })
}
export async function httpDelete(uuid) {
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
    let response = await fetch('http://127.0.0.2:5000/Profile/delete', options);
    if (response.ok) {
        return "Ok";
    } else {
        console.warn("Ошибка HTTP: " + response.status);
    }
}

export async function httpFact() {
    const cookie = new Cookies()
    const Profile = cookie.get('profile', [true])
    const uuid = Profile.UUID
    const fact = Profile.facts
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
    let response = await fetch('http://127.0.0.2:5000/MainWindow', options);
    if (response.ok) {
        return "Ok";
    } else {
        console.warn("Ошибка HTTP: " + response.status);
    }
}

export async function httpCallBack(code) {
    const cookie = new Cookies()
    const Profile = cookie.get('profile', [true])
    const uuid = Profile.UUID
    const options = {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Origin': 'http://127.0.0.1/'
        }),
        body: JSON.stringify({
            'uuid': uuid,
            'telephon': code
        })
    }
    let response = await fetch('http://127.0.0.2:5000/CallBack', options);
    if (response.ok) {
        return "Ok";
    } else {
        console.warn("Ошибка HTTP: " + response.status);
    }
}