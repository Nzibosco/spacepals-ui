import { apiLogin } from "../remote/login-clients/login-clients"

export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN'
}

export const updateCurrentUser = (email:string, password:string) => async (dispatch:any) => {
    let response:any = await apiLogin(email,password)
    let body = await response;
    if(body.data) {
        console.log(body);
        
        dispatch({
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser:body.data
            }
        })
    } else {
        dispatch({
            type:loginTypes.UNSUCCESSFUL_LOGIN,
            payload: {
                loginMessage:'Login failed. Status code: ' + body.status + ''
            }
        })
    }
}