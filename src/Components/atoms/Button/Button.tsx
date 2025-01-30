import "./Button.css"
import { ButtonProps } from "./Button.props"

export const Button = ({ label, handleClick }: ButtonProps) => {
    return <>
        <button onClick={handleClick} className="button">{label}</button>
    </>
}