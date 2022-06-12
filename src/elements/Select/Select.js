
const Select = ( { className, selectedUsers } ) => {
    return (
        <select className={className}>
            <option value="">Selected ({selectedUsers.length})</option>
            {selectedUsers.map((user) => <option disabled="disabled" value={user.id}>{user.name}</option>)}
        </select>
    )
}

export default Select;