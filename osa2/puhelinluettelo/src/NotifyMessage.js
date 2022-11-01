import { useEffect,useState } from "react"


const NotifyMessage = ({type,message}) =>{
    const [messageText, setmessageText] = useState()
    
    useEffect(() =>{
        setmessageText(message)
        const interval = setInterval(() => {
            setmessageText(null)
            return clearInterval(interval)
            },3000);
        
        },[message])

    if (messageText === null) {
        return null
      }
    return(
        <div className={type}> <h1>{messageText}</h1></div>
    )
}

export default NotifyMessage