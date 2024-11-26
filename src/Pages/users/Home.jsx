import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
    autoplay: true
	};

	return (
		<div className="content-center text-center w-full h-screen bg-slate-400">
			<Slider {...settings}>
				<div className="w-full h-screen bg-red-300">
					<h3>1</h3>
				</div>
				<div className="w-full h-screen  bg-sky-400">
					<h3>2</h3>
				</div>
				<div className="w-full h-screen bg-cyan-300">
					<h3>3</h3>
				</div>
			</Slider>
		</div>
	);
};

export default Home;
