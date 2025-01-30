import "./Navbar.css"
import { Navlink } from "@atoms/Navlink"

export const Navbar = () => {
    return <>
        <div className="navbar">
            <Navlink label="Home" path="" />
            <Navlink label="Characters" path="characters" />
            <Navlink label="Add Character" path="addcharacter" />
            <Navlink label="Gacha" path="gacha" />
        </div>
    </>
}