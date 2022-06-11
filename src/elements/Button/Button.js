const Button = ( { onClick, text } ) => {
    return (
        <button className="bg-gray-200 p-2 rounded-lg text-sm hover:bg-gray-100 text-gray-700" onClick={onClick}>{text}</button>
    )
}

export default Button;