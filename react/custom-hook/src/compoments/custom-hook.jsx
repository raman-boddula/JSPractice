import { useEffect } from "react"
// custom hook is function which can be used in the multiple places
// instead of writing same piece of code in multiple component , you can create multiple
// custom hook and you can import and use whereever you want in your entire application

const useCustomHook = (count) => {
    useEffect(() => {
        if (count > 0) {
            document.title = `Chats ${count}`
        } else {
            document.title = ``
        }
    },[count])
}
export default useCustomHook