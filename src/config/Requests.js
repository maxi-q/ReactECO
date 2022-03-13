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
    let data;
    const options = {
        method: "GET",
        headers: new Headers({'Content-Type': 'application/json'})
    }
    return await fetch(URL, options)
        .then((response) => response.json())
        .then((json) =>  {
            return json;

        });
}
