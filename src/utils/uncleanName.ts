export const uncleanName = (name: string) => {
    const newName = name.split('');
    const clearName = newName.map(letter =>
        letter === " " ? "-"
            : letter.toLowerCase()
        )
    return clearName.join('');
}