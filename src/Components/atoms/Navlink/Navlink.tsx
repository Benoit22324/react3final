import "./Navlink.css"
import { Link } from "react-router-dom"
import { NavlinkProps } from "./Navlink.props"

export const Navlink = ({ label, path }: NavlinkProps) => {
    return <>
        <Link to={`react3final/${path}`} className="navlink">{label}</Link>
    </>
}