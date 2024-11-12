import { useState } from "react";

const Header = () => {
	const [auth, setAuth] = useState(true);

	return (
		<div className="fixed top-0 left-0 w-full py-4 hidden lg:block bg-white text-dark_blue_2 font-poppins shadow-lg d_container">
			<div className="flex items-center justify-between gap-6">
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
		</div>
	);
};

export default Header;
