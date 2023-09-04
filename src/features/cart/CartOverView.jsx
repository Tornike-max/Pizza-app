import { useSelector } from "react-redux"
import { formatCurrency } from "../utils/helpers"
import { Link } from "react-router-dom"

function CartOverView() {
    const cart = useSelector(store => store.cart.cart)
    const totalCartPrice = useSelector((store) =>
        store.cart.cart.reduce(
            (accum, cur) => accum + cur.orderPrice * cur.quantity,
            0));
    const totalCartQuantity = useSelector((store) =>
        store.cart.cart.reduce((accum, cur) => accum + cur.quantity, 0))

    if (cart.length === 0) return null

    return (
        <div className='bg-orange-400 text-stone-200 flex justify-between items-center py-4 px-4
        sm:px-6 sm:py-6'>
            <span className=' font-semibold ml-4 text-xs space-x-4 sm:text-sm md:text-lg'>Items In The Cart: {totalCartQuantity}</span>
            <span className=' font-semibold ml-4 text-xs space-x-4 sm:text-sm md:text-lg'>Total Price: {formatCurrency(totalCartPrice)}</span>
            <Link className=' font-semibold ml-4 text-xs space-x-4 sm:text-sm md:text-lg' to='/cart'>Go To Cart</Link>
        </div >
    )
}

export default CartOverView
