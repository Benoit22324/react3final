import "./Text.css"
import { TextProps } from "./Text.props"

export const Text = ({ txt }: TextProps) => {
    return <p className="text">{txt}</p>
}