export const cleanBirthday = (date: string) => {
    const newDate = date.split('');
    const clearDate = newDate.map((number, index) =>
        index <= 4 ? ""
            : number
        )
    return clearDate.join('');
}