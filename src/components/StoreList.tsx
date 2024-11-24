import { useEffect, useState } from "react"
import type {  Works } from "../type"




export default function StoreList(){
        
        const [works, setWorks] = useState<Works[]>([])
        const [isLoading, setIsLoading] = useState(false)
        const [isAddingToCart, setIsAddingToCart] = useState(false)
        const [error, setError] = useState<null | string>(null)
       
        useEffect(() => {
            const asyncFunction = async () => {
            setIsLoading(true)
            try{
            const response = await fetch("http://localhost:3000/works")
            if(! response.ok){
                setError("There was a error." + response.statusText)
            }else{
            
            const data = await response.json()
            setWorks(data)
            setError(null)
            
            }
        
            }catch(error: any){
                setError("There was a error." + error.message)
            }
            setIsLoading(false)
            }
            asyncFunction()
    }, [])
  
    
    
    
    const addToCart = async (workId: number) => {
        const newCartItem = {
          workId: workId, 
          amount: 1
        }
        
        setIsAddingToCart(true)
        try{
        const response = await fetch("http://localhost:3000/cart", {
          method: "POST", 
          body: JSON.stringify(newCartItem),
          headers: {
            "Content-Type": "application/json"
          }
        })
        
        if(!response.ok){
                setError(response.statusText)
            }
        } catch (error: any){
                setError(error.message)
        }
                setIsAddingToCart(false)   
        
        
        
        
    } 

    
    
   
    
    


    return(
            <div>
                    <h2>Shop</h2>
                    {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
                    { works.map(work => (
                        <div className="card width: 18rem;" key= {work.id}>
                        <img className="card-img-top" src={work.image} alt="Card image cap" />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary" disabled = {isAddingToCart} onClick={() => addToCart(work.id)}>{work.price.toFixed(2)}</button>
                        
                        
            </div>
            </div>
        ))}
            </div>
        )
    }