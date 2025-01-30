export interface useGachaBoxInterface {
    gachaBox: gachaCharacter[],
    addBox: (character: string, rarity: number) => void
}

export type gachaCharacter = {
    name: string,
    rarity: number,
    quantity: number
}