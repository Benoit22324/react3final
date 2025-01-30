import { addCharacter } from "@api/CharactersApi";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddCharacter = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addCharacter,
        onError: (_, chara) => {
            queryClient.setQueryData(
                ["characters"],
                (prev: string[]) => {
                    if (!prev) return [chara]
                    return [...prev, chara]
                }
            )
        } 
    })
}