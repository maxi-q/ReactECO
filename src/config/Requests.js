import React from "react";

export default async function httpPost(name, password, navigate) {

    const options = {
        method: "POST",
        mode: 'no-cors',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            'name': name,
            'password': password
        })
    }
    let response = await fetch('http://127.0.0.2:5000/api/registration', options);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
                       // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        console.log(json)
    } else {
        console.log(await response.status)
    }

    navigate('/MainWindow');
}
