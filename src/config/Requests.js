import React, {useContext} from "react";


export default async function httpPost(name, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            password: password
        })
    };
    const response = await fetch('https://reqres.in/api/posts', requestOptions);
    const data = await response.json();
    console.log(data.name);
}
