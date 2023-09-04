import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function Header() {

    const [query, setQuery] = useState('')
    const cart = useSelector(store => store.cart.cart)


    return (
        <form className='flex justify-between items-center bg-orange-400 
        border-b border-stone-400 py-4 px-4 sm:px-6 font-sans text-sm md:text-lg lg:text-xl'>
            <Link className='flex' to='/'>
                <p>🍕</p>
                <span className='flex-bold text-stone-200 '>Best_</span>
                <span className='flex-bold text-stone-200'> OzPizZa</span>
                <p>🍕</p>
            </Link>
            <input value={query} onChange={(e) => setQuery(e.target.value)}
                className='w-32 rounded-md sm:focus:w-56 focus:transition-all 
            focus:duration-300 focus:ring-1 focus:ring-slate-400 pl-2'
                type='search' placeholder="🔎 Search" />
            {cart.length !== 0 &&
                <Link to='/cart' className='flex-bold text-stone-200
             hidden sm:block' >Your Cart 🛒<span className='text-lg text-stone-200 
             font-bold'>{cart.length}</span>
                </Link>}
        </form >
    )
}




export default Header
