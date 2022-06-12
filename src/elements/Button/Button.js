import { memo } from "react";

const Button = ( { className, onClick, text } ) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default memo(Button);