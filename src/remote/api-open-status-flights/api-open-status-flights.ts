import axios from 'axios';

export const getOpenFlights = axios.get('bosco.ccuh9npdivlz.us-east-2.rds.amazonaws.com')
.then(res => {
    console.log(res)
    console.log(res.data)
})