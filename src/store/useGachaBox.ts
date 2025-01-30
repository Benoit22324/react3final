import { create } from "zustand";
import { useGachaBoxInterface } from "./useGachaBox.props";

export const useGachaBox = create<useGachaBoxInterface>((set) => ({
    gachaBox: [],
    addBox: (character, rarity) => set((state) => ({
        gachaBox: state.gachaBox.find((chara) => chara.name === character) ? state.gachaBox.map((chara) => {
            if (chara.name === character) return {...chara, quantity: chara.quantity + 1}
            return chara
        })
        : [...state.gachaBox, {name: character, rarity, quantity: 1}]
    }))
}))