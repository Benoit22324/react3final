import "./OneCharacterpage.css"
import { Skeleton } from "@atoms/Skeleton";
import { useOneCharacter } from "@hooks/queries";
import { useParams } from "react-router-dom"

export const OneCharacterpage = () => {
    const { name } = useParams();
    const { data, isLoading } = useOneCharacter(name ? name : "hu-tao");

    console.log(data)

    return <>
        <div className="onecharacterpage">
            <h1 className="mainTitle">Character Info</h1>
            {
                isLoading ? <Skeleton width="100%" height="80dvh" />
                : <p>{data.name}</p>
            }
        </div>
    </>
}