import { cleanBirthday } from "utils/cleanBirthday"
import "./DisplayCharacterInfo.css"
import { DisplayCharacterInfoProps } from "./DisplayCharacterInfo.props"
import { SkillsView } from "@molecules/SkillsView"
import { PassivesView } from "@molecules/PassivesView"

export const DisplayCharacterInfo = ({ character }: DisplayCharacterInfoProps) => {
    return <>
        <div className="displayCharaContainer">
            <div className="displayCharaMainInfo">
                <h2 className="subTitle">{character.name}</h2>
                <p className="text italic">{character.title}</p>
                <p className="text separation">{character.description}</p>
                <p className="text"><span className="bold">Rarity:</span> {character.rarity} Stars</p>
                <p className="text"><span className="bold">Gender:</span> {character.gender}</p>
                <p className="text"><span className="bold">Birthday:</span> {cleanBirthday(character.birthday)} <span className="italic">(mm-dd)</span></p>
                <p className="text"><span className="bold">Nation:</span> {character.nation}</p>
                <p className="text"><span className="bold">Vision:</span> {character.vision}</p>
                <p className="text"><span className="bold">Weapon type:</span> {character.weapon}</p>
                <p className="text"><span className="bold">Affiliation:</span> {character.affiliation}</p>
            </div>
            <div className="displayCharaSkillInfo">
                <h2 className="subTitle">Skills</h2>
                <SkillsView skills={character.skillTalents} />
            </div>
            <div className="displayCharaPassiveInfo">
                <h2 className="subTitle">Passives</h2>
                <PassivesView passives={character.passiveTalents} />
            </div>
        </div>
    </>
}