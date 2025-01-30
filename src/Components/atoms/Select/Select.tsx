import "./Select.css"
import { SelectProps } from "./Select.props";

export const Select = ({ id, value, setValue, options }: SelectProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    }

    return <>
        <select id={id} value={value} onChange={handleChange} className="select">
            <option value="" hidden>Select</option>
            {
                options.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)
            }
        </select>
    </>
}