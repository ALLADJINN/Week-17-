import { useEffect, useState } from "react"
import { CartItem, Works } from "../type"
import CartItemRow from "./CartItemRow"




export default function CartList(){
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [works, setWorks] = useState<Works[]>([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage]= useState("")
    
    
    
    useEffect(() => {
            const fetchCart = async () => {
            setLoading(true)
            try{
            const response = await fetch("http://localhost:3000/cart")
            if(!response.ok){
                setErrorMessage(response.statusText)
            } else{
            const data = await response.json()
            setCartItems(data)
            }
            }catch(error: any){
                setErrorMessage(error.message)
            }
            setLoading(false)
            }
            fetchCart()

            const fetchWorks = async () => {
                setLoading(true)
                try{
                const response = await fetch("http://localhost:3000/works")
                if(! response.ok){
                    setErrorMessage("There was a error." + response.statusText)
                }else{
                
                const data = await response.json()
                setWorks(data)
                setErrorMessage("")
                
                }
            
                }catch(error: any){
                    setErrorMessage("There was a error." + error.message)
                }
                setLoading(false)
                }
                fetchWorks()
    }, [])
    
    
    
    
    
    return(
        
    <>  
        <h2>Cart</h2>
    
       {loading ?  <p> Loading... </p> :
       errorMessage ? <p>{errorMessage}</p>:
       <table className = "table table-striped">
            <tbody>
            {cartItems.map(item => (
                
                <CartItemRow item={item} key = {item.id} works={works} />
            
            ))}
            </tbody>
        </table>
        }
    </>
    
    )
}