import { useState, useCallback } from "react"
import useFetch from 'use-http'

const useUsers = () => {

    const [ usersList, setUsersList ] = useState([]);
    const [ user, setUser ] = useState([]);

    const { get, loading, response } = useFetch('https://jsonplaceholder.typicode.com');

    const fetchSingleUser = useCallback( async (id) => {
        
        const userData = await get(`/users/${id}`);

        if( response.ok ) {
            setUser(userData)
        } else {
            return false;
        }

    }, [get, response.ok])

    const fetchUsers = useCallback( async () => {

        const usersData = await get(`/users`);
        
        if( response.ok ) {

            const usersObjectList = [];

            usersData.forEach((user)=> {
                const userObject = {};
                userObject.id = user?.id;
                userObject.name = user?.name;
                userObject.username = user?.username;
                userObject.email = user?.email;
                usersObjectList.push(userObject);
            });

            setUsersList(usersObjectList);

        } else { 
            return false;
        }

    }, [ get, response.ok ])

    return { usersList, loading, user, fetchUsers, fetchSingleUser };

}

export default useUsers;