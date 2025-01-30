import { GachaPull } from "@molecules/GachaPull"
import "./Gachapage.css"
import { useGachaBox } from "@store/useGachaBox"
import { GachaBoxView } from "@atoms/GachaBoxView"

export const Gachapage = () => {
    const { gachaBox } = useGachaBox();

    return <>
        <div className="gachapage">
            <h1 className="mainTitle">Gacha</h1>
            <GachaPull />
            {
                gachaBox.length > 0 && <>
                    <h2>Your Box</h2>
                    {
                        gachaBox.map((character, index) => <GachaBoxView key={index} character={character} />)
                    }
                </>
            }
        </div>
    </>
}