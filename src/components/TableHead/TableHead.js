const TableHead = () => {
    return (
        <thead className="border-b border-gray-200">
            <tr className="bg-gray-50 child:py-4 child:px-4 child:text-gray-500 child:font-medium child:text-sm">
                <th><input type="checkbox" className="before:border-gray-100"/></th>
                <th className="whitespace-nowrap">USER ID</th>
                <th className="whitespace-nowrap">PROFILE IMAGE</th>
                <th>NAME</th>
                <th >USERNAME</th>
                <th className="w-full">EMAIL</th>
            </tr>
        </thead>
    )
}

export default TableHead;