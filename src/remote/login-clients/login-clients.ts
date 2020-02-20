import { loginClient } from '.';
import axios from 'axios';

// export const apiLogin = async(username:string, password:string) : Promise<object> => {
//     let credentials = {
//         email:username,
//         password:password
//     }

//     let credsJSON = JSON.stringify(credentials)
//     let response = await loginClient.post(credsJSON)
//     console.log(response)
//     return response
// }

export const apiLogin = async (email: string, pass: string):Promise<object> => {
    let credentials = {
        email: email,
        password: pass
    }
    
    let res:any =
    axios.post('http://localhost:8080/spacepals/auth',
    credentials
    ).then(response =>{
        console.log(response.status === 200)
        res = response.data;
        console.log(res);
        
        return response;
    }).catch(err => {
        console.log(err);
        res = err
        return err; 
    })
    console.log(res);
    return res;
}