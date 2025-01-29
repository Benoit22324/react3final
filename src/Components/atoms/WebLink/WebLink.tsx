import "./WebLink.css"
import { WebLinkProps } from "./WebLink.props"

export const WebLink = ({ label, link }: WebLinkProps) => {
    return <a href={link} className="weblink">{label}</a>
}