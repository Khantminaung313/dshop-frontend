import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import categories from "./db/categories.json";

const Header = () => {
	const [auth, setAuth] = useState(true);
	const [selectedParentCategory, setSelectedParentCategory] = useState(null);
	const [selectedChildCategories, setSelectedChildCategories] = useState([]);
	const [parentCategories, setParentCategories] = useState([]);

	useEffect(() => {
		let parentCategories = categories.filter(
			(cat) => cat.parent_id === null
		);
		setParentCategories(parentCategories);
	}, []);

	const selectingCategory = ({cat}) => {
		setSelectedParentCategory(cat);
		let childCats = categories.filter(childCat => {
			if(childCat.parent_id !== null) {
				return childCat.parent_id.includes(cat.id);
			}
		})
		setSelectedChildCategories(childCats);
	};

	const RenderSubCategories = () => {
		return (
			<div
				id="sub-categories"
				className="grid grid-cols-4 gap-8 bg-white border shadow py-4 d_container"
			>
				<div className="col-span-1 overflow-hidden w-full h-[300px] border-4 border-slate-400">
					<img
						className="object-center object-cover w-full h-full"
						src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=680"
						alt=""
					/>
				</div>
				<div className="col-span-3">
					<NavLink
						to={"/"+selectedParentCategory.name}
						className="text-xl font-bold text-slate-500 hover:text-slate-700 mb-4 underline inline-block capitalize"
					>
						{selectedParentCategory.name}
					</NavLink>
					<div className="w-full grid grid-cols-4 gap-2">
						{
							selectedChildCategories.map(cat => (
								<NavLink key={cat.id} to={"/"+selectedParentCategory.name+"/"+cat.name}>{cat.name}</NavLink>
							))
						}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="fixed top-0 left-0 w-full hidden lg:block shadow-lg bg-white z-50">
			<div className="flex items-center justify-between gap-6 border-b d_container py-8">
				<div>
					<NavLink
						className="text-2xl font-bold text-light_blue_1"
						to="/"
					>
						DShop
					</NavLink>
				</div>

				{auth ? (
					<div className="flex gap-4">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-8 stroke-light_blue_1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</svg>
						</button>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-8 stroke-light_blue_1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-8 stroke-light_blue_1"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
							</svg>
						</button>
					</div>
				) : (
					<div className="flex gap-4">
						<button>Login</button>
						<button>Register</button>
					</div>
				)}
			</div>
			<div>
				<ul className="desktop-nav-bar flex items-center justify-start text-dark_blue_2 font-poppins d_container *:py-4 *:px-2 *:cursor-pointer [&>*:hover]:text-blue-500 *:capitalize *:border-b-4 rounded *:border-transparent">
					<NavLink to="/">Home</NavLink>
					{parentCategories.map((cat) => (
						<NavLink key={cat.id} to={"/" + cat.name} onMouseEnter={() => selectingCategory({cat})} onMouseLeave={() => setSelectedChildCategories([])}>
							{cat.name}
						</NavLink>
					))}
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</ul>
			</div>
			{selectedChildCategories.length > 0 && <RenderSubCategories/>}
		</div>
	);
};

export default Header;
