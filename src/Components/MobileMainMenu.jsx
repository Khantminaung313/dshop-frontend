import { BiCart, BiHeart, BiUserCircle } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { IoColorPalette, IoSettingsSharp } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileMainMenu = ({ openMainManu, darkMode, setDarkMode }) => {
	return (
		<div
			className={`absolute transition-all duration-300 ease-linear top-full z-50 max-w-1/2 max-h-screen overflow-y-auto bg-white dark:bg-dark_blue_1 rounded shadow border ${openMainManu ? "right-0" : "-right-full"}`}
		>
			<div
				id="mobile-nav"
				className="divide-y divide-slate-200 *:py-4 *:px-6 *:cursor-pointer *:flex *:gap-8 *:items-center [&>*:hover]:text-light_blue_1 [&>*:hover]:underline underline-offset-8 *:capitalize *:border-b-4 *:border-transparent [*:text-red-500]"
			>
				<div to={"/"}>
					<IoColorPalette />
					<button
						className="w-20 h-[28px] border-2 rounded border-light_blue_2 overflow-hidden relative grid grid-cols-2 items-center place-content-center box-border"
						onClick={() => setDarkMode((prev) => !prev)}
					>
						<div
							className={`absolute top-0 w-1/2 h-full bg-dark_blue_1 transition-all duration-300 ease-linear ${
								darkMode ? "left-1/2" : "left-0"
							}`}
						></div>
						<div className="bg-light_blue_1 text-black w-full h-full">
							<MdOutlineDarkMode className="mx-auto fill-slate-200 size-2" />
						</div>
						<div className="bg-white w-full h-full text-light_blue_1">
							<CiLight className="mx-auto size-2" />
						</div>
					</button>
				</div>
				<NavLink to={"/dashboard"}>
					<LiaClipboardListSolid />
					<span>Dashboard</span>
				</NavLink>
				<NavLink className={"/cart"}>
					<BiCart />
					<span>Cart</span>
				</NavLink>
				<NavLink className={"/whitelist"}>
					<BiHeart />
					<span>WhiteList</span>
				</NavLink>
				<NavLink className={"/profile"}>
					<BiUserCircle />
					<span>Profile</span>
				</NavLink>
				<NavLink className={"/setting"}>
					<IoSettingsSharp />
					<span>Setting</span>
				</NavLink>
			</div>
		</div>
	);
};

export default MobileMainMenu;
