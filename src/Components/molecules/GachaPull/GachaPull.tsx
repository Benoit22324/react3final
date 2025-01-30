import "./GachaPull.css"
import { Button } from "@atoms/Button"
import { useCharacters } from "@hooks/queries"
import { useGachaBox } from "@store/useGachaBox";
import axios from "axios";
import { useState } from "react";
import { cleanName } from "utils/cleanName";

export const GachaPull = () => {
    const { data } = useCharacters();
    const { addBox } = useGachaBox();
    const [characterGot, setCharacterGot] = useState("");
    const [rarity, setRarity] = useState<number>(4);
    const [isPulling, setIsPulling] = useState(false);

    const handlePull = async () => {
        const randomDrop = data[Math.floor(Math.random() * data.length + 1)];
        setIsPulling(true);
        const response = await axios.get(`https://genshin.jmp.blue/characters/${randomDrop}`);
        const responseRarity = response.data.rarity;

        setTimeout(() => {
            setCharacterGot(randomDrop);
            setRarity(responseRarity);
            addBox(randomDrop, responseRarity);

            setIsPulling(false);
        }, 3000)
    }

    return <>
        <div className="gachapull">
            {
                isPulling ? <p className="pulling">Your next character is ...</p>
                : characterGot && <p className={`text ${rarity === 4 ? "rare" : "legendary"}`}>{cleanName(characterGot)} ({String(rarity)}⭐)</p>
            }
            {
                !isPulling && <Button label="Pull" handleClick={handlePull} />
            }
        </div>
    </>
}