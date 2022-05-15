import Cookies from "universal-cookie";

const RegMemory = (data) => {
    const cookie = new Cookies()
    
    const json = {
        "UUID": data.uuid,
        "name": data.name,
        "achievements": "1",
        "friends": "",
        "facts": ""
    }
    cookie.set('profile', json, { path: '/' })
}

export default RegMemory