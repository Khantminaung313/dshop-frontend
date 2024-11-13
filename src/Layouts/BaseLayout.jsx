import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

const BaseLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default BaseLayout