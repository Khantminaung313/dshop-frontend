import gsap from "gsap";
import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

const XButton = ({onClick, openNav}) => {
    useEffect(() => {
        gsap.fromTo(".x-button", {rotate: 360}, {rotate: 0, duration: .6, immediateRender: true})
    }, [openNav])
	return (
		<>
			<HiXMark className="x-button" size={32} onClick={onClick}/>
		</>
	);
};

export default XButton;
