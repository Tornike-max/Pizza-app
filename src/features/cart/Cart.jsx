import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import { clearCart } from "./cartSlice"
import Button from "../ui/Button"

function Cart() {
    const cart = useSelector(store => store.cart.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (cart.length === 0) return navigate('/menu')

    return (
        <div>
            <div className='mx-6 mt-2'>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>

            <ul className='grid grid-cols-1 divide-y mx-6 my-6'>
                {cart.map(item => <CartItem item={item} key={item.orderId} />)}
            </ul>

            <div className='flex gap-4 mx-6'>
                <Button onClick={() => navigate('/order/new')}>Go To Checkout</Button>
                <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
            </div>
        </div>
    )
}

export default Cart
