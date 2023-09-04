import { useDispatch, useSelector } from "react-redux"
import { formatCurrency, formatDate } from "../utils/helpers"
import Button from '../ui/Button'
import { useNavigate } from "react-router-dom"
import { clearCart } from "../cart/cartSlice"



function FinalOrder() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const order = useSelector(store => store.cart.orderData)
    const address = useSelector(store => store.user.address)



    const totalCartPrice = useSelector((store) =>
        store.cart.cart.reduce(
            (accum, cur) => accum + cur.orderPrice * cur.quantity,
            0));

    const randomMinutes = Math.floor(Math.random() * (60 - 20 + 1)) + 20;


    function handlerGoHome(e) {
        e.preventDefault()
        navigate('/')
        dispatch(clearCart())
    }
    const randomKey = crypto.randomUUID()


    return (
        <div className='mx-6 flex flex-col justify-between'>
            <div className='bg-slate-300 rounded-md my-4 py-4 px-6 text-center'>
                <h1 className='text-slate-700 font-semibold'>Your Order Will Be There Soon ({formatDate(randomMinutes)})</h1>
            </div>
            <div className='bg-slate-300 rounded-md my-4 py-4 px-6 text-center flex justify-center'>
                {order.map(item => (
                    <div key={randomKey} className='flex w-full items-start flex-col  py-2 px-3 rounded-md'>
                        <div className='text-xs flex items-start flex-col '>
                            <p>Your Phone Number: <span className='font-semibold'>{item.number}</span></p>
                            <p>Your Name: <span className='font-semibold'>{item.name}</span></p>
                            <p>Location: <span className='font-semibold'>{address}</span></p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-slate-300 rounded-md my-4 py-4 px-4 text-center flex justify-center flex-col gap-3 text-xs sm:text-md'>
                <div className='flex justify-start mx-6'>
                    <Button onClick={() => navigate(-1)}>Go Back</Button>
                </div>
                {order.map(el => el.cart.map(item =>
                    <ul className='divide-stone-200 mx-6 border-b-[1px] border-t-[1px]' key={item.orderId}>
                        <li className='flex gap-4 py-2 mx-4 items-center'>
                            <img className='w-24 h-24 sm:h-32 sm:w-32' src={item.orderImg} alt={item.orderName} />
                            <div className='flex flex-col mx-4 my-4 grow pt-0.5 gap-2 items-start'>
                                <p className='font-semibold'>{item.quantity}X {item.orderName}</p>
                                <p className='text-xs text-slate-700'>{item.orderIng.join(', ')}</p>
                                <p className='font-semibold'>Price: {formatCurrency(item.totalPrice)}</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-red-400 font-semibold text-md'>{item.orderSoldOut ? 'Sold Out' : ''}</h2>
                            </div>

                        </li>
                    </ul>))}
            </div>

            <div className='bg-slate-300 rounded-md my-4 py-4 px-6 text-center flex justify-center'>

                <div className='flex gap-2 flex-col  py-2 px-3 rounded-md justify-center items-center text-xs sm:text-md'>
                    <p>Total Price: {formatCurrency(totalCartPrice)}</p>
                    <div className='flex justify-start mx-6'>
                        <Button onClick={handlerGoHome}>Go To Home</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}




export default FinalOrder
