import React from "react";
import axios from 'axios';

export default async function httpPost(name, password, navigate) {

    const body = JSON.stringify({
        name: name,
        password: password
    });
    axios
        .post('http://127.0.0.2:5000/api/registration', body)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    navigate('/MainWindow');
}
