import "./CharacterView.css"
import { Navlink } from "@atoms/Navlink"
import { CharacterViewProps } from "./CharacterView.props"
import { cleanName } from "utils/cleanName"

export const CharacterView = ({ characterName }: CharacterViewProps) => {
    return <>
        <div className="characterView">
            <p className="text">{cleanName(characterName)}</p>
            <Navlink label="View character info" path={`../../character/${characterName}`} />
        </div>
    </>
}