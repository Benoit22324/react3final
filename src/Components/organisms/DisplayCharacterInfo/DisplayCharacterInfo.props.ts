import { TConstellation } from "@atoms/ConstellationInfoView"
import { TPassive } from "@atoms/PassiveInfoView"
import { TSkill } from "@atoms/SkillInfoView"

export type DisplayCharacterInfoProps = {
    character: TCharacter // Trop d'info
}

export type TCharacter = {
    id: string,
    name: string,
    title: string,
    description: string,
    rarity: string,
    gender: string,
    birthday: string,
    nation: string,
    vision: string,
    weapon: string,
    affiliation: string,
    skillTalents: TSkill[],
    passiveTalents: TPassive[],
    constellations: TConstellation[],
}