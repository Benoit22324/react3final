import { fetchCharacters, fetchOneCharacter } from "@api/CharactersApi"
import { useQuery } from "@tanstack/react-query"

export const useCharacters = () => {
    return useQuery({
        queryFn: fetchCharacters,
        staleTime: 1000 * 60 * 5,
        queryKey: ["characters"]
    })
}

export const useOneCharacter = (name: string) => {
    return useQuery({
        queryFn: () => fetchOneCharacter(name),
        queryKey: ["character", name]
    })
}