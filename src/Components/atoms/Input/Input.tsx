import "./Input.css"
import { InputProps } from "./Input.props"

export const Input = ({ id, type, value, setValue, placeholder = "" }: InputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return <>
        <input id={id} type={type} value={value} onChange={handleChange} placeholder={placeholder} className="input" />
    </>
}