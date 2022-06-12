const TableHead = ( { users, selectAllUsers, selectedUsers } ) => {
    return (
        <thead className="border-b border-gray-200">
            <tr className="bg-gray-50 child:py-4 child:px-4 child:text-gray-500 child:font-medium child:text-sm">
                <th>
                    <input 
                        type="checkbox" 
                        checked={users.length === selectedUsers.length} 
                        onChange={() => selectAllUsers(users)} 
                        className="border-gray-300 rounded bg-gray-50 focus:ring-offset-0 cursor-pointer"/>
                </th>
                <th className="whitespace-nowrap">USER ID</th>
                <th className="whitespace-nowrap">PROFILE IMAGE</th>
                <th>NAME</th>
                <th className="text-left">USERNAME</th>
                <th className="w-full text-left">EMAIL</th>
            </tr>
        </thead>
    )
}

export default TableHead;