function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className='bg-orange-500 text-orange-200 py-1 px-3 text-[11px] sm:py-2 sm:px-4 sm:text-sm transition-all uppercase rounded-md'>
            {children}
        </button>
    )
}

export default Button
