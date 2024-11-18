import gsap from "gsap"
import { useEffect } from "react"
import { HiBars3 } from "react-icons/hi2"


const BarButton = ({onClick, openNav}) => {

    useEffect(() => {
        gsap.fromTo(".bar-button", {rotate: 360}, {rotate: 0, duration: .6, immediateRender: true})
    }, [openNav])

  return (
    <>
        <HiBars3 className="bar-button" size={32} onClick={onClick}/>
    </>
  )
}

export default BarButton