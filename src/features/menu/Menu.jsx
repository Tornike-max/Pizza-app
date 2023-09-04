import { useLoaderData } from "react-router-dom"
import { getData } from "../data/data"
import MenuItem from "./MenuItem"


function Menu() {
    const menu = useLoaderData()
    return (
        <div>
            <ul className='divide-y divide-stone-200'>
                {menu?.data?.map(item => <MenuItem item={item} key={item.id} />)}
            </ul>
        </div>
    )
}

export async function loader() {
    const menu = await getData()
    return menu
}

export default Menu
