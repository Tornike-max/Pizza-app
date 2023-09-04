import { Outlet, useNavigation } from "react-router-dom"
import CartOverView from "../cart/CartOverView"
import Header from "./Header"
import Loader from "./Loader"


function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    if (isLoading) return <Loader />
    return (
        <div className='grid h-screen grid-rows-[auto_1fr_auto] font-mono' >
            <Header />

            <main className='overflow-scroll scrollbar-none'>
                <Outlet />
            </main>

            <CartOverView />
        </div>
    )
}

export default AppLayout
