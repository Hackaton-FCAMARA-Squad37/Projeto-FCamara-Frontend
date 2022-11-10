import { useState } from "react"

const useUserState = () => {
    const [isOn, setIsOn] = useState(false)

    return {
        logado: isOn,
        logar: () => setIsOn(true),
        deslogar: () => setIsOn(false)
    }
}


export default useUserState
