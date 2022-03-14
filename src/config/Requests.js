import React from "react";

export async function httpPost(name, password, navigate) {
    const options = {
        method: "POST",
        headers: new Headers({'Content-Type': 'application/json'}),
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

export async function httpGet(URL) {

    const options = {
        method: "GET",
        headers: new Headers({'Content-Type': 'application/json'})
    }
    let response = await fetch(URL, options);

    if (response.ok) {
        return await response.json();

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}
