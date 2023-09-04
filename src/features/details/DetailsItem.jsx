import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

function DetailsItem({ item }) {
    const navigate = useNavigate()

    function navigateBack(e) {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <li className='flex items-center flex-col gap-2 text-slate-800 font-semibold'>
            <img className='rounded-md' src={item.detailImg} alt='' />
            <p>{item.detailName}</p>
            <p>{item.detailPrice}</p>
            <p>{item.detailIng.join(', ')}</p>
            <p>{item.detailSoldout}</p>
            <Button onClick={navigateBack}>Go Back</Button>
        </li>
    )
}

export default DetailsItem
