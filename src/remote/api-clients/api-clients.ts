import { apiClient } from '.'

export const getPlanets = async(url:string) : Promise<object> => {
    let response = await apiClient.get('')
    return response
}