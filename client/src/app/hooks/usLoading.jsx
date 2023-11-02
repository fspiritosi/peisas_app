import { useState } from "react";

export function useLoading(){
    const [isLoading, setIsLoading] = useState()

    const startLoading = () => {
        setIsLoading(true)
    }
    const finishLoading = () => {
        setIsLoading(false)
    }

    return {
        isLoading,
        startLoading,
        finishLoading
    }
}