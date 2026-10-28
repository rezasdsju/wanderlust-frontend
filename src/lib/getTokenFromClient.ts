import { authClient } from "./auth-client";


const getTokenFromClient = async() => {
    const {data, error} = await authClient.token()
    if (error){
        console.log('No token found')
    }
    const token = data?.token
    return token
};

export default getTokenFromClient;