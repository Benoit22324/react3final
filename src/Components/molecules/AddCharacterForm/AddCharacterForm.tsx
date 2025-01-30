import { Button } from "@atoms/Button"
import "./AddCharacterForm.css"
import { Input } from "@atoms/Input"
import { Label } from "@atoms/Label"
import { useState } from "react"
// import { Select } from "@atoms/Select"
import { useAddCharacter } from "@hooks/mutations"
// import { uncleanName } from "utils/uncleanName"
// import { TCharacter } from "@organisms/DisplayCharacterInfo"

export const AddCharacterForm = () => {
    const { mutate: addCharacter } = useAddCharacter();

    const [characterName, setCharacterName] = useState("");
    // const [characterTitle, setCharacterTitle] = useState("");
    // const [characterDescription, setCharacterDescription] = useState("");
    // const [characterRarity, setCharacterRarity] = useState("");
    // const [characterGender, setCharacterGender] = useState("");
    // const [characterBirthday, setCharacterBirthday] = useState("");
    // const [characterNation, setCharacterNation] = useState("");
    // const [characterVision, setCharacterVision] = useState("");
    // const [characterWeapon, setCharacterWeapon] = useState("");
    // const [characterAffiliation, setCharacterAffiliation] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const character: string = characterName

        addCharacter(character)
    }

    return <>
        <form onSubmit={handleSubmit} className="addcharaform separation">
            <div className="addcharaformline">
                <Label id="name" label="Name" />
                <Input id="name" type="text" value={characterName} setValue={setCharacterName} />
            </div>
            {/* <div className="addcharaformline">
                <Label id="title" label="Title" />
                <Input id="title" type="text" value={characterTitle} setValue={setCharacterTitle} />
            </div>
            <div className="addcharaformline">
                <Label id="description" label="Description" />
                <Input id="description" type="text" value={characterDescription} setValue={setCharacterDescription} />
            </div>
            <div className="addcharaformline">
                <Label id="rarity" label="Rarity" />
                <Select id="rarity" value={characterRarity} setValue={setCharacterRarity} options={[
                    {name: "5 stars", value: "5"},
                    {name: "4 stars", value: "4"}
                ]} />
            </div>
            <div className="addcharaformline">
                <Label id="gender" label="Gender" />
                <Select id="gender" value={characterGender} setValue={setCharacterGender} options={[
                    {name: "Boy", value: "Male"},
                    {name: "Girl", value: "Female"}
                ]} />
            </div>
            <div className="addcharaformline">
                <Label id="birthday" label="Birthday" />
                <Input id="birthday" type="date" value={characterBirthday} setValue={setCharacterBirthday} />
            </div>
            <div className="addcharaformline">
                <Label id="nation" label="Nation" />
                <Select id="nation" value={characterNation} setValue={setCharacterNation} options={[
                    {name: "Mondstad", value: "Mondstad"},
                    {name: "Liyue", value: "Liyue"},
                    {name: "Inazuma", value: "Inazuma"},
                    {name: "Sumeru", value: "Sumeru"},
                    {name: "Fontaine", value: "Fontaine"},
                    {name: "Natlan", value: "Natlan"},
                    {name: "Snezhnaya", value: "Snezhnaya"},
                    {name: "Unknown", value: "Unknown"},
                ]} />
            </div>
            <div className="addcharaformline">
                <Label id="vision" label="Vision" />
                <Select id="vision" value={characterVision} setValue={setCharacterVision} options={[
                    {name: "Pyro", value: "Pyro"},
                    {name: "Hydro", value: "Hydro"},
                    {name: "Anemo", value: "Anemo"},
                    {name: "Electro", value: "Electro"},
                    {name: "Dendro", value: "Dendro"},
                    {name: "Cryo", value: "Cryo"},
                    {name: "Geo", value: "Geo"}
                ]} />
            </div>
            <div className="addcharaformline">
                <Label id="Weapon" label="Weapon type" />
                <Select id="Weapon" value={characterWeapon} setValue={setCharacterWeapon} options={[
                    {name: "Swords", value: "Swords"},
                    {name: "Claymores", value: "Claymores"},
                    {name: "Polearms", value: "Polearms"},
                    {name: "Catalysts", value: "Catalysts"},
                    {name: "Bow", value: "Bow"}
                ]} />
            </div>
            <div className="addcharaformline">
                <Label id="affiliation" label="Affiliation" />
                <Input id="affiliation" type="text" value={characterAffiliation} setValue={setCharacterAffiliation} />
            </div> */}
            <div>
                <Button label="Add" />
            </div>
        </form>
    </>
}