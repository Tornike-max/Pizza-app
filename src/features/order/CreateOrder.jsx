import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import { useState } from "react"
import { addInOrder, clearOrder } from "../cart/cartSlice"
import { fetchPosition } from "../user/userSlice"



function CreateOrder() {
    const cart = useSelector(store => store.cart.cart)
    const orderLength = useSelector(store => store.cart.orderData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const address = useSelector(store => store.user.address)

    function order(e) {
        e.preventDefault()
        const newOrder = {
            name,
            number,
            location,
            cart,
        }
        if (orderLength.length > 0) return dispatch(clearOrder())
        dispatch(addInOrder(newOrder))
        navigate(`/finalOrder`)
    }


    if (!cart.length) return <p>empty cart</p>
    return (
        <div className="px-3 py-2">
            <form className='my-4 mx-6'>

                <div className='flex flex-col mb-5 gap-2 sm:flex-row sm:items-center '>
                    <label className='sm:basis-40'>Full Name</label>
                    <input className='px-4 input grow focus: outline-none focus:ring focus:ring-orange-400 md:px-6 md:py-3 focus:rounded-lg transition-all duration-300 bg-orange-100 rounded-md' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className='flex flex-col mb-5 gap-2 sm:flex-row sm:items-center '>
                    <label className='sm:basis-40'>Phone Number</label>
                    <input className='px-4 input grow focus: outline-none focus:ring focus:ring-orange-400 md:px-6 md:py-3 focus:rounded-lg transition-all duration-300 bg-orange-100 rounded-md' type='number' name='number' value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>


                <div className='flex flex-col mb-5 gap-2 sm:flex-row sm:items-center relative'>
                    <label className='sm:basis-40'>Your Location</label>
                    <div className='grow'>
                        <input
                            type='hidden'
                            name='cart'
                            value={JSON.stringify(cart)}
                        />
                        <input
                            className='px-4 input w-full focus: outline-none focus:ring focus:ring-orange-400 md:px-6 md:py-3 focus:rounded-lg transition-all duration-300 bg-orange-100 rounded-md'
                            type='text'
                            name='location'
                            value={address}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    {!address ? <span className='absolute right-[0px] bottom-[3px] sm:right-[1px] sm:bottom-[1px] md:right-[1px] md:bottom-[5px]'>
                        <button className='bg-orange-400 py-1 px-2 text-xs rounded-tr-lg rounded-br-lg md:py-3 md:px-4 md:text-sm text-slate-200' onClick={(e) => {
                            e.preventDefault();
                            dispatch(fetchPosition())
                        }}>Get Position</button>
                    </span> : ''}
                </div>



                <Button onClick={order}>Add Order</Button>
            </form >
        </div >
    )
}

export default CreateOrder

