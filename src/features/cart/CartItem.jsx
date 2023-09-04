import { useDispatch, useSelector } from "react-redux"
import Button from "../ui/Button"
import { deleteFromCart, getCurrentPrice, getCurrentQuantity, getPrice } from "./cartSlice"
import { formatCurrency } from "../utils/helpers"

function CartItem({ item }) {
    const dispatch = useDispatch()
    const totalCartPrice = useSelector(getCurrentPrice(item.orderId));
    const itemPrice = useSelector(getPrice(item.orderId))
    const quantity = useSelector(getCurrentQuantity(item.orderId))
    const price = !totalCartPrice ? itemPrice : totalCartPrice

    return (
        <li className='grid grid-cols-1 divide-y space-y-4'>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-2 mb-2'>
                    <p className='text-xl font-semibold mt-2'>{quantity}X {item.orderName}</p>
                    <p className='text-slate-400'>{item.orderIng.join(', ')}</p>
                    <p className='text-xl font-semibold'>{formatCurrency(price)}</p>
                </div>
                <Button onClick={() => dispatch(deleteFromCart(item.orderId))}>Remove</Button>
            </div>
        </li>
    )
}

export default CartItem
