import { useNavigate, useRouteError } from "react-router-dom"
import Button from "../ui/Button"

function Error() {
    const navigate = useNavigate()
    const err = useRouteError()
    return (
        <div className='flex justify-center items-center flex-col text-red-500 font-bold my-32 gap-4'>
            <h1>SOMETHING WENT WRONG!!!</h1>
            <h2>{err.message}</h2>
            <Button onClick={() => navigate('/')}>🔙 Go Back To HomePage</Button>
        </div>
    )
}

export default Error
