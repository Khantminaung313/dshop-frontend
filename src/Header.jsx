import { useState } from "react";

const Header = () => {
	const [auth, setAuth] = useState(true);

    const openMenu = (menu) => {
        console.log(menu)
    }

	const closeMenu = (menu) => {
		console.log(menu)
	}

	return (
		<div className="fixed top-0 left-0 w-full hidden lg:block shadow-lg">
			<div className="flex items-center justify-between gap-6 border-b d_container py-4">
				<div>
					<a href="/">DShop</a>
				</div>

				{auth ? (
					<div className="flex gap-4">
                        <button>Dashboard</button>
						<button>Cart</button>
						<button>Order</button>
						<button>Whitelist</button>
					</div>
				) : (
					<div className="flex gap-4">
						<button>Login</button>
						<button>Register</button>
					</div>
				)}
			</div>
            <div>
                <ul className="flex items-center justify-start gap-4 text-dark_blue_2 font-poppins d_container *:py-4 *:px-2 *:cursor-pointer [&>*:hover]:text-blue-500 *:border-b-4 rounded *:border-transparent [&>*:hover]:border-blue-500">
                    <li>Home</li>
                    <li>All Products</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
		</div>
	);
};

export default Header;
