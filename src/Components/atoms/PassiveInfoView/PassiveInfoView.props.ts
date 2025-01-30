export type PassiveInfoViewProps = {
    passive: TPassive
}

export type TPassive = {
    name: string,
    unlock: string,
    description: string,
    level?: string
}