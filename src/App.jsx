import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./features/ui/HomePage"
import Menu, { loader as menuLoader } from "./features/menu/Menu"
import AppLayout from "./features/ui/AppLayout"
import Cart from "./features/cart/Cart"
import CreateOrder from "./features/order/CreateOrder"
import Details from "./features/details/Details"
import FinalOrder from './features/final/FinalOrder'
import Error from "./features/error/Error"


const router = createBrowserRouter([
  {
    element: <AppLayout />, errorElement: <Error />, children: [
      { path: '/', element: <HomePage /> },
      { path: '/menu', element: <Menu />, loader: menuLoader },
      { path: '/details/:id', element: <Details /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      { path: '/finalOrder', element: <FinalOrder /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

