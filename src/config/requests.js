import axios from 'axios'

export default function httpGet()
{
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( response => {
            console.log(response);
            return({users: response.data})
        })
        .catch( error => {
            console.log(error);
        })
}
