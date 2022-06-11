import { useState, useCallback, useEffect } from "react"
import useFetch from 'use-http'

const useUsers = () => {

    const [ usersList, setUsersList ] = useState([]);

    const { get, loading, response } = useFetch('https://jsonplaceholder.typicode.com');

    const refetch = useCallback( async () => {

        const usersData = await get(`/users`);
        
        if( response.ok ) {

            const usersObjectList = [];

            usersData.forEach((user)=> {
                const userObject = {};
                userObject.id = user?.id;
                userObject.name = user?.name;
                userObject.username = user?.username;
                userObject.email = user?.email;
                userObject.phone = user?.phone;
                userObject.website = user?.website;
                userObject.address = `${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}`
                usersObjectList.push(userObject);
            });

            setUsersList(usersObjectList);

        } else { 
            return false;
        }

    }, [get, response.ok])

    useEffect(() => { 
        
            refetch(); 
           
    }, [ refetch ] ) 

    return { usersList, loading, refetch };

}

export default useUsers;