
import { TableHead, TableRow } from "../"


const Table = ( { users } ) => {
    return (
        <table class="w-screen">
            <TableHead />
            <tbody>
                {
                    users.map(user => <TableRow user={user}/>)
                } 
            </tbody>
        </table>
    )
}

export default Table;