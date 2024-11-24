import { CartItem, Works } from "../type"

type Props = {
    item: CartItem
    works: Works[]
}


export default function CartItemRow({item, works}: Props){
    
    
    
    const work = works.find(w => w.id === item.workId)
    
    
   
   
        
        
        
    
    
    
    
    
    
    return(
        
                <tr >
                    <td>{work?.type || "PRODUCT NOT FOUND "} </td>
                    
                    <td>${work?.price.toFixed(2)}</td>
                    <td>{item.amount} </td>
                </tr>
    
    )
}