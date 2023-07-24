import {API_USERS} from '../kashikoi.env'

export async function fetchusers() 
{
    try
    {        
        const response = await fetch(API_USERS);
        return response.json();//return array with 2 users
    }   
    catch(error)
    {        
        console.error('Error fetching users:', error.message);
        throw error;
    }
}////////////////////////////////////////////////////////////
