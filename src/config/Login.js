import React from 'react';

export default async function Login(name, password, navigate) {

    document.cookie = "user=John";
    alert( document.cookie );

    /*navigate('/MainWindow');*/
}
