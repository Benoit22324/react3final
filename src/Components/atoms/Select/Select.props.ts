export type SelectProps = {
    id: string,
    value: string,
    setValue: (value: string) => void,
    options: TSelectOption[]
}

type TSelectOption = {
    name: string,
    value: string
}