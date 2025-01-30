export type SkillInfoViewProps = {
    skill: TSkill
}

export type TSkill = {
    name: string
    unlock: string
    description: string
    upgrades: TUpgrades[]
    type: string
}

export type TUpgrades = {
    name: string
    value: string
}