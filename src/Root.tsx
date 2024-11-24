
import { Link, Outlet } from "react-router-dom"




export default function Root(){
  
  
  return(
    <div>
        <div className="container mt-3">
          <ul className="nav bg-light mb-3 border border-start-0 border-end-0">
            
          <li className="nav-item">
              <Link to="/homepage"className="nav-link">Home</Link>

            </li>
            
            
            <li className="nav-item">
              <Link to="/storelist"className="nav-link">Store</Link>

            </li>
              <li className="nav-item">
                <Link to="/cart"className="nav-link">Cart</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactpage"className="nav-link">Contact</Link>
              </li>
          </ul>

        </div>
        <Outlet/>
        
        
    </div>
  )
}
