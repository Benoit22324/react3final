import "./Characterspage.css"
import { useState } from "react"
import { Searchbar } from "@molecules/Searchbar"
import { useCharacters } from "@hooks/queries"
import { Skeleton } from "@atoms/Skeleton"
import { uncleanName } from "utils/uncleanName"
import { useNavigate } from "react-router-dom"
import { CharactersViews } from "@organisms/CharactersViews"

export const Characterspage = () => {
    const navigate = useNavigate();
    const { data, isLoading, isError, error } = useCharacters();
    const [searchValue, setSearchValue] = useState("");
    const [invalidMessage, setInvalidMessage] = useState<string | null>(null);

    const handleSearch = () => {
        const apiCharacterName = uncleanName(searchValue);
        const existCharacter = data.find((character: any) => character === apiCharacterName);
        
        if (searchValue.trim() === "") setInvalidMessage("Enter a character name before searching");
        else if (!existCharacter) setInvalidMessage("Character's name not found");
        else if (existCharacter) navigate(`/react3final/character/${apiCharacterName}`);
    }

    return <>
        <div className="characterspage">
            <h1 className="mainTitle">Characters Selectors</h1>
            <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />
            {
                isError && <p className="errormsg">{error.message}</p>
            }
            {
                invalidMessage && <p className="errormsg">{invalidMessage}</p>
            }
            {
                isLoading ? <Skeleton width="90%" height="15em" />
                : <CharactersViews characters={data} />
            }
        </div>
    </>
}