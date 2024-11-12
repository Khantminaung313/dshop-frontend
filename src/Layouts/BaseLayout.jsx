import Footer from "../Footer"
import Header from "../Header"
import Home from "../Pages/users/Home"

const BaseLayout = () => {
  return (
    <>
        <Header />
        <Home />
        <Footer />
    </>
  )
}

export default BaseLayout