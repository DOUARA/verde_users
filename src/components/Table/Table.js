
import { TableHead, TableRow } from "../"

const Table = ( { users, loading } ) => {
    return (
        <table className="w-screen">
            <TableHead />
            {loading ? "Loading..." :
            <tbody>
                {
                    users.map(user => <TableRow key={user.id} user={user}/>)
                } 
            </tbody>}
        </table>
    )
}

export default Table;