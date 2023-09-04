import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"

function MenuHeader() {
    const navigate = useNavigate()
    function handlerMenu(e) {
        e.preventDefault()
        navigate('/menu')
    }
    return (
        <div className='w-screen m-auto mt-10 flex justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20'>
            <div className='max-w-[1640px] mx-auto'>
                <div className='max-h-[500px] h-auto relative mt-4'>
                    <div className='absolute w-full h-full text-gray-200 text-xs'>
                        <h1 className='pl-4 font-semibold pt-28 text-center sm:text-xl '>
                            The <span className='text-orange-500 font-semibold'>Best</span>
                        </h1>
                        <h1 className='pl-4 font-semibold text-center sm:text-xl'>
                            <span className='text-orange-500 font-semibold'>Foods</span> Delivered
                        </h1>
                        <div className='flex justify-center items-center pt-4 sm:pt-8'>
                            <Button onClick={handlerMenu}>
                                Go To Menu
                            </Button>
                        </div>
                    </div>
                    <img
                        className='w-full max-h-[500px] h-auto object-cover rounded-md'
                        src='https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
                        alt={''}
                    />
                </div>
            </div>
        </div>

    )
}

export default MenuHeader
