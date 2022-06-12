import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../elements";

const TableRow = ( {user, selectUser, isUserSelected}) => {

    let navigate = useNavigate();

    return (
        <tr className="child:py-3 child:px-6 border-b border-gray-200">
            <td className="text-center">
                <input type="checkbox" 
                    checked={isUserSelected(user)}
                    onChange={() => selectUser(user)}
                />
            </td>
            <td className="text-right">{user.id}</td>
            <td><img alt={user.name} src={user.profileImage ? user.profileImage : "https://placehold.co/600x400"} /></td>
            <td className="text-2xl text-blue-700 whitespace-nowrap">{user.name}</td>
            <td className="text-sm whitespace-nowrap">{user.username}</td>
            <td className="text-sm flex justify-between">
                {user.email} 
                <Button className="bg-gray-200 p-2 rounded-lg text-sm hover:bg-gray-100 text-gray-700" text="detail" onClick={useCallback(()=> navigate(`/user/${user.id}`), [navigate, user.id])}/>
            </td>
        </tr>
    )
}

export default TableRow;