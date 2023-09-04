import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { formatCurrency } from '../utils/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { createDetail } from '../details/detailsSlice'
import { addToCart, decreaseQuantity, deleteFromCart, getCurrentQuantity, increaseQuantity } from '../cart/cartSlice'
function MenuItem({ item }) {
    const cart = useSelector(store => store.cart.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = item

    const isItemInCart = cart.find(itemInCart => itemInCart.orderId === id);
    const quantity = useSelector(getCurrentQuantity(id))


    function detailObject(e) {
        e.preventDefault()
        const itemDetail = {
            detailId: item.id,
            detailName: item.name,
            detailImg: item.imageUrl,
            detailPrice: item.unitPrice,
            detailSoldOut: item.soldOut,
            detailIng: item.ingredients
        }
        dispatch(createDetail(itemDetail))

        navigate(`/details/${item.id}`)
    }

    function cartObject(e) {
        e.preventDefault()
        const itemDetail = {
            orderId: item.id,
            orderName: item.name,
            orderImg: item.imageUrl,
            orderPrice: item.unitPrice,
            orderSoldOut: item.soldOut,
            orderIng: item.ingredients,
            quantity: 1,
            totalPrice: item.price * 1
        }
        dispatch(addToCart(itemDetail))
    }

    function handlerDeleteItem(e) {
        e.preventDefault();
        dispatch(deleteFromCart(id))
    }

    return (
        <li className='flex gap-4 py-2 mx-6 items-center'>
            <img onClick={detailObject} className='w-28 h-28 rounded-sm hover:rounded-md hover:w-[132px] hover:h-[132px] transition-all duration-300 cursor-pointer' src={item.imageUrl} alt={item.name} />
            <div className='flex flex-col mx-4 my-4 grow pt-0.5 gap-2 text-[10px] sm:text-lg'>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-slate-400'>{item.soldOut ? 'Sold Out' : 'Show Details'}</p>
                <p className='font-semibold'>{formatCurrency(item.unitPrice)}</p>
            </div>
            <div className='flex flex-col gap-4 transition-all duration-300'>
                <Button onClick={detailObject}>Show Details</Button>
                {!isItemInCart ? <Button onClick={cartObject}>Add To Cart</Button> : <div className='flex justify-between gap-2 items-center text-lg text-orange-400 font-semibold'>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <span>{quantity === 0 ? dispatch(deleteFromCart(item.id)) : quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    <Button onClick={handlerDeleteItem}>Delete</Button>
                </div>}
            </div>
        </li>
    )
}


export default MenuItem

