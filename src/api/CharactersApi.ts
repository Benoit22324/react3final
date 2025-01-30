import axios from "axios";

export const fetchCharacters = async () => {
    const response = await axios.get("https://genshin.jmp.blue/characters/");
    return response.data;
}

export const fetchOneCharacter = async (name: string) => {
    const response = await axios.get(`https://genshin.jmp.blue/characters/${name}`);
    return response.data;
}

export const addCharacter = async (character: string) => {
    const response = await axios.post("https://genshin.jmp.blue/characters/", character);
    return response.data
}