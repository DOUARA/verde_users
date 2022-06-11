import { Button } from "../../elements"

const TableRow = ( {user}) => {
    return (
        <tr className="child:py-3 child:px-6 border-b border-gray-200">
            <td className="text-center"><input type="checkbox" /></td>
            <td className="text-right">{user.id}</td>
            <td><img alt={user.name} src={user.profileImage ? user.profileImage : "https://placehold.co/600x400"} /></td>
            <td className="text-2xl text-blue-700 whitespace-nowrap">{user.name}</td>
            <td className="text-sm whitespace-nowrap">{user.username}</td>
            <td className="text-sm flex justify-between">
                {user.email} 
                <Button text="detail" onClick={()=> alert("Going to User Page")}/>
            </td>
        </tr>
    )
}

export default TableRow;