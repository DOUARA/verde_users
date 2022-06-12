
import { TableHead, TableRow } from "../"
import { useSelectedUsers } from "../../hooks"

const Table = ( { users, loading } ) => {

    const { selectedUsers, isUserSelected, selectUser, selectAllUsers } = useSelectedUsers();

    return (
        <table className="w-screen">
            <TableHead selectAllUsers={selectAllUsers} users={users} selectedUsers={selectedUsers} />
            {loading ? "Loading..." :
            <tbody>
                {
                    users.map(user => <TableRow isUserSelected={isUserSelected} selectUser={selectUser} key={user.id} user={user}/>)
                } 
            </tbody>}
        </table>
    )
}

export default Table;