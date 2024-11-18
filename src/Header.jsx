import { useEffect, useState } from "react";
import { BiCart, BiHeart, BiUserCircle } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import { IoIosColorPalette } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileMainMenu from "./Components/MobileMainMenu";
import BarButton from "./Partials/Buttons/BarButton";
import XButton from "./Partials/Buttons/XButton";
import categories from "./db/categories.json";

const Header = () => {
	const [auth, setAuth] = useState(true);
	const [darkMode, setDarkMode] = useState(false);
	const [openMainManu, setOpenMainMenu] = useState(false);
	const [openNav, setOpenNav] = useState(false);
	const [selectedParentCategory, setSelectedParentCategory] = useState(null);
	const [selectedChildCategories, setSelectedChildCategories] = useState([]);
	const [parentCategories, setParentCategories] = useState([]);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const html = document.querySelector("html");
		if (darkMode) {
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
		}
	}, [darkMode]);

	useEffect(() => {
		let parentCategories = categories.filter(
			(cat) => cat.parent_id === null
		);
		setParentCategories(parentCategories);
	}, []);

	useEffect(() => {
		if (!isHovered) {
			setSelectedParentCategory(null);
			setSelectedChildCategories([]);
		}
	}, [isHovered]);

	const selectingCategory = ({ cat }) => {
		setSelectedParentCategory(cat);
		let childCats = categories.filter((childCat) => {
			if (childCat.parent_id !== null) {
				return childCat.parent_id.includes(cat.id);
			}
		});
		setSelectedChildCategories(childCats);
	};

	const RenderSubCategories = () => {
		if (!selectedParentCategory) return null;
		return (
			<div
				className="absolute left-0 top-full w-full"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div
					id="sub-categories"
					className="grid grid-cols-4 gap-8 bg-white border dark:border-slate-700 shadow dark:shadow-lg dark:shadow-d_dark_gray py-4 d_container"
				>
					<div className="col-span-1 overflow-hidden aspect-[5/3] border-4 border-slate-400">
						<img
							className="object-center object-cover w-full h-full"
							src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=680"
							alt=""
						/>
					</div>
					<div className="col-span-3">
						<NavLink
							to={"/" + selectedParentCategory.name}
							className="text-xl font-bold text-d_dark_gray dark:text-d_light_gray hover:text-slate-700 mb-4 underline underline-offset-4 inline-block capitalize"
						>
							{selectedParentCategory.name}
						</NavLink>
						<div className="w-full grid grid-cols-4 gap-2 text-d_dark_gray dark:text-d_light_gray [&>*:hover]:text-light_blue_1 *:capitalize [&>*:hover]:underline">
							{selectedChildCategories.map((cat) => (
								<NavLink
									key={cat.id}
									to={
										"/" +
										selectedParentCategory.name +
										"/" +
										cat.name
									}
								>
									{cat.name}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			{/* Desktop Navigation Bar */}
			<div className="fixed top-0 left-0 w-full hidden lg:block shadow-lg bg-white text-light_blue_2 z-50">
				<div className="flex items-center justify-between gap-6 border-b d_container py-4 xl:py-8">
					<div className="w-full">
						<NavLink
							className="text-2xl font-bold text-light_blue_1 dark:text-d_light_gray"
							to="/"
						>
							DShop
						</NavLink>
					</div>

					{auth ? (
						<div className="flex gap-4 justify-end items-center relative w-full">
							<button>
								<BiCart
									className="size-8 text-light_blue_1 dark:text-white"
									size={32}
								/>
							</button>
							<button>
								<BiHeart
									className="size-8 text-light_blue_1 dark:text-white"
									size={32}
								/>
							</button>
							<div className="group">
								<BiUserCircle
									className="size-8 text-light_blue_1 dark:text-white"
									size={32}
								/>
								<div className="hidden group-hover:block absolute top-[100%] right-0 w-auto max-h-[400px] overflow-x-auto pt-6">
									<ul className="bg-white divide-y divide-slate-300 border border-slate-200 py-2 *:ps-4 *:pe-8 *:py-3 *:flex *:gap-8 *:items-center rounded *:cursor-pointer [&>li:hover]:underline">
										<div>
											<IoIosColorPalette
												size={24}
												className="text-light_blue_1"
											/>
											<button
												className="w-20 h-6 border-2 rounded border-light_blue_2 overflow-hidden relative grid grid-cols-2 box-border"
												onClick={() =>
													setDarkMode((prev) => !prev)
												}
											>
												<div
													className={`absolute top-0 w-1/2 h-full bg-dark_blue_1 transition-all duration-300 ease-linear ${
														darkMode
															? "left-1/2"
															: "left-0"
													}`}
												></div>
												<div className="bg-light_blue_1 text-black w-full h-full">
													<MdOutlineDarkMode
														className="mx-auto dark:text-dark_blue_1"
														size={20}
													/>
												</div>
												<div className="bg-white w-full h-full text-light_blue_1">
													<CiLight
														className="mx-auto"
														size={20}
													/>
												</div>
											</button>
										</div>
										<li>
											<LiaClipboardListSolid
												size={24}
												className="text-light_blue_1"
											/>
											<NavLink to={"/dashboard"}>
												Dashboard
											</NavLink>
										</li>
										<li>
											<FaRegUserCircle
												size={24}
												className="text-light_blue_1"
											/>
											<NavLink to={"/profile"}>
												Profile
											</NavLink>
										</li>
										<li>
											<IoSettingsSharp
												size={24}
												className="text-light_blue_1"
											/>
											<NavLink to={"/setting"}>
												Setting
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					) : (
						<div className="flex gap-4">
							<button>Login</button>
							<button>Register</button>
						</div>
					)}
				</div>
				<div>
					<ul className="desktop-nav-bar flex items-center justify-start text-dark_blue_2 dark:text-d_light_gray font-poppins d_container *:py-4 *:px-6 *:cursor-pointer [&>*:hover]:text-light_blue_1 *:capitalize *:border-b-4 rounded *:border-transparent">
						<NavLink to="/">Home</NavLink>
						{parentCategories.map((cat) => (
							<NavLink
								key={cat.id}
								to={"/" + cat.name}
								onMouseEnter={() => {
									selectingCategory({ cat });
									setIsHovered(true);
								}}
								onMouseLeave={() => {
									setIsHovered(false);
								}}
								className={`${
									selectedParentCategory &&
									selectedParentCategory.name == cat.name &&
									"!text-light_blue_1"
								}`}
							>
								{cat.name}
							</NavLink>
						))}
						<NavLink to="/about">About</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</ul>
				</div>
				{isHovered && <RenderSubCategories />}
			</div>

			{/* -------------------------------------------Mobile Menu section---------------------------------------------- */}

			{/* Mobile Menu Button */}
			<div className="fixed top-0 left-0 w-full lg:hidden shadow bg-white z-50">
				<div className="relative shadow-sm">
					<div className="flex justify-between items-center d_container">
						<NavLink
							className={`text-2xl font-bold py-4 text-light_blue_1`}
							to={"/"}
						>
							D Shop
						</NavLink>
						{openMainManu ? (
							<XButton
								onClick={() => setOpenMainMenu(false)}
								openMainManu={openMainManu}
							/>
						) : (
							<BarButton
								onClick={() => setOpenMainMenu(true)}
								openMainManu={openMainManu}
							/>
						)}
					</div>
					<MobileMainMenu
						openMainManu={openMainManu}
						setDarkMode={setDarkMode}
						darkMode={darkMode}
					/>
				</div>
				<div className="d_container border-t border-slate-200 py-1 grid grid-cols-6">
					<button className="text-start">
						<HiBars3 className="fill-dark_blue_2 size-6" />
					</button>
					<div className="text-light_blue_1 col-span-4 text-center">10% discount for Happy New Year!</div>
				</div>
			</div>

			{/* Mobile Nav Menu */}
			<div></div>
		</div>
	);
};

export default Header;
