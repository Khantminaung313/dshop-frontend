import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="place-content-center text-center text-2xl h-screen dark:bg-dark_blue_1">
			<div>
				<h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-slate-400">404</h1>
				<h3 className="text-base my-4">Page Not Found</h3>
				<Link className="text-sm underline text-slate-600 dark:text-slate-300" to={"/"}>Go Home</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
