import axios from 'axios'

export const loginClient = axios.create({
    //URL OF OUR JAVA APPLICATION ON EBS
    baseURL: 'https://www.google.com'
})