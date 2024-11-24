import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StoreList from './components/StoreList.tsx'
import CartList from './components/CartList.tsx'
import HomePage from './components/HomePage.tsx'
import ContactPage from './components/ContactPage.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"/homepage",
        element: <HomePage/>
      },
      {
        path:"/storelist",
        element: <StoreList/>
      },
      {
        path:"/cart",
        element: <CartList/>
      },
      {
        path:"/contactpage",
        element: <ContactPage/>
      }
    ]
  }
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
