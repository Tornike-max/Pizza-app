import { useSelector } from "react-redux"
import DetailsItem from "./DetailsItem"


function Details() {
    const detail = useSelector(store => store.detail.detail)

    return (
        <ul className='flex justify-center items-center my-4'>
            {detail.map(item => <DetailsItem item={item} key={item.detailId} />)}
        </ul>
    )
}


export default Details
