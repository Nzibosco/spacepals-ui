import axios from 'axios'

export const companyFlightAPI = axios.create({
    baseURL: 'http://projecttwodo-env.fryh9swbjr.us-east-2.elasticbeanstalk.com/'
})