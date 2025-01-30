export const cleanName = (name: string) => {
    const newName = name.split('');
    const clearName = newName.map((letter, index) =>
        index === 0 ? letter.toUpperCase()
            : letter === "-" ? " "
                : newName[index - 1] === "-" ? letter.toUpperCase()
                    : letter
        )
    return clearName.join('');
}