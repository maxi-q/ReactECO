import React from "react";


export default async function httpPost(name, password, navigate) {



    const options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            name: name,
            password: password
        })
    };
    await fetch('http://127.0.0.2:5000/api/registration', options)

    navigate('/MainWindow');
}
