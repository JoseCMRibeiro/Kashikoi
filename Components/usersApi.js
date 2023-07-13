export async function fetchusers() 
{
    try
    {        
        const response = await fetch('https://randomuser.me/api/?results=2');
        const users = await response.json();

        return users;//return array with 2 users
    }   
    catch(error)
    {        
        console.error('Error fetching users:', error.message);
        throw error;
    }
}
