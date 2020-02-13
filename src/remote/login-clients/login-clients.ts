import { loginClient } from '.'

export const apiLogin = async(username:string, password:string) : Promise<object> => {
    let credentials = {
        username:username,
        password:password
    }

    let credsJSON = JSON.stringify(credentials)
    let response = await loginClient.post(credsJSON)
    return response
}