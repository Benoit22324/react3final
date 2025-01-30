import "./OneCharacterpage.css"
import { Skeleton } from "@atoms/Skeleton";
import { useOneCharacter } from "@hooks/queries";
import { DisplayCharacterInfo } from "@organisms/DisplayCharacterInfo";
import { useParams } from "react-router-dom"

export const OneCharacterpage = () => {
    const { name } = useParams();
    const { data, isLoading, isError, error } = useOneCharacter(name ? name : "amber");

    return <>
        <div className="onecharacterpage">
            <h1 className="mainTitle">Character Info</h1>
            {
                isError && <p className="errormsg">{error.message}</p>
            }
            {
                isLoading ? <Skeleton width="100%" height="80dvh" />
                : <DisplayCharacterInfo character={data} />
            }
        </div>
    </>
}