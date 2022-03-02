import React from "react";

export default async function httpPost(name, password, navigate) {


    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            'name': name,
            'password': password
        })
    }
    let response = await fetch('http://localhost:5000/debug', options);
    if (response.ok) {
        let json = await response.json();
        console.log(json)
    } else {
        console.log(await response.status)
    }



    //navigate('/MainWindow');
}
