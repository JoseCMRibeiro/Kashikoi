export async function fetchusers() 
{
    try
    {        
        const response = await fetch('https://randomuser.me/api/?results=2');
        const array_response = await response.json();

        console.log(array_response);
        return array_response;//return array with list of users
    }   
    catch(error)
    {        
        console.error('Error fetching users:', error.message);
        throw error;
    }

}
