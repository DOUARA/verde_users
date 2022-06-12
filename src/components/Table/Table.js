
import { TableHead, TableRow } from "../"
import { useSelectedUsers } from "../../hooks"
import { Button, Select } from "../../elements"

const Table = ( { users, loading } ) => {

    const { selectedUsers, isUserSelected, selectUser, selectAllUsers } = useSelectedUsers();

    return (
        <div className="w-screen relative">
            <div className="flex flex-col absolute items-center top-[-80px] right-8">
                <Select className="text-blue-600 border border-blue-600 rounded-lg p-2 w-48 mb-1" selectedUsers={selectedUsers} />
                <Button className="bg-[#EF5DA8] w-44 rounded-[3px] text-white text-sm p-1 hover:" text="Delete" onClick={() => alert("Delete Users Implementation!")}/>
            </div>
            <table>
                <TableHead selectAllUsers={selectAllUsers} users={users} selectedUsers={selectedUsers} />
                {loading ? "Loading..." :
                <tbody>
                    {
                        users.map(user => <TableRow isUserSelected={isUserSelected} selectUser={selectUser} key={user.id} user={user}/>)
                    } 
                </tbody>}
            </table>
        </div>
    )
}

export default Table;