import React from 'react'
import axios from 'axios'

export const getFlights = async() : Promise<object> =>{
    try{ 
        axios.get('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights')
        .then(res =>{
            const data = res.data
            console.log('this is res '+ res);
        console.log('this is the first element'+ res.data)
        console.log("this is the actual fucking thing" + res.data[0].status)})
        const response = await fetch('http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/flights',{
        method: 'GET'
    })
    
        const responsebody = await response.json()

        console.log('this is the body ' + responsebody)
    return responsebody
    }catch(e){
    return {}
    }
}
