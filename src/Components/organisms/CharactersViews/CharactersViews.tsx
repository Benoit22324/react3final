import "./CharactersViews.css"
import { CharacterView } from "@molecules/CharacterView"
import { CharactersViewsProps } from "./CharactersViews.props"

export const CharactersViews = ({ characters }: CharactersViewsProps) => {
    return <>
        <div className="charactersViewsContainer">
            <h2 className="subTitle">Characters List</h2>
            <div className="charactersViews separation">
                {
                    characters.map((characterName, index) => <CharacterView key={index} characterName={characterName} />)
                }
            </div>
        </div>
    </>
}