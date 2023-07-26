import {API_USERS} from '../kashikoi.env'
import { messageModal } from '../Components/renderMessageModal';

export async function fetchusers() 
{
    try
    {        
        const response = await fetch(API_USERS);
        const responseJson = await response.json()
        return responseJson;//return array with 2 users
    }   
    catch(error)
    {        
        messageModal("API USERS",error.message)
        return false
    }
}//-----------------------------------------------------------------------
