import { AddCharacterForm } from "@molecules/AddCharacterForm"
import "./AddCharacterpage.css"

export const AddCharacterpage = () => {

    return <>
        <div className="addcharacterpage">
            <h1 className="mainTitle">Add a new Character</h1>
            <AddCharacterForm />
        </div>
    </>
}