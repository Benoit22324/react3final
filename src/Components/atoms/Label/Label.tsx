import "./Label.css"
import { LabelProps } from "./Label.props"

export const Label = ({ id, label }: LabelProps) => {
    return <>
        <label htmlFor={id} className="label">{label}:</label>
    </>
}