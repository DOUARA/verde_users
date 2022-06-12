import { useState, useCallback } from "react";

const useSelectedUsers = () => {
    
    const [ selectedUsers, setSelectedUsers ] = useState([]);

    const isUserSelected = useCallback ( (user) => {
        if ( selectedUsers.slice().filter(el => el.id === user.id).length > 0 ) return true;
        return false;
    }, [selectedUsers] )

    const selectUser = useCallback ( ( user ) => {
        
        let cloned = selectedUsers.slice();
        
        if( !isUserSelected(user) ) {
            cloned.push(user);
            
            setSelectedUsers(cloned)
        } else { // de-select a user
            cloned = selectedUsers.filter(el => el.id !== user.id)
            setSelectedUsers(cloned)
        }
    }, [isUserSelected, selectedUsers])

    const selectAllUsers = useCallback( (users) => {
        if(users.length === selectedUsers.length ) {
            setSelectedUsers([])
            return;
        } 
        setSelectedUsers(users);
    }, [selectedUsers.length])

    return {isUserSelected, selectUser, selectAllUsers, selectedUsers}
}

export default useSelectedUsers;