import { cleanName } from "utils/cleanName"
import { GachaBoxViewProps } from "./GachaBoxView.props"

export const GachaBoxView = ({character}: GachaBoxViewProps) => {
    return <>
        <div>
            <p className={`text ${character.rarity === 4 ? "rare" : "legendary"}`}>{cleanName(character.name)} ({character.rarity}⭐) x{character.quantity}</p>
        </div>
    </>
}