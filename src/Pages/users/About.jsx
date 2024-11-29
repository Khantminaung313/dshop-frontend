import axios from "axios";
import { useEffect, useState } from "react";
import RoleItem from "../../Components/RoleItem";

const About = () => {
	const [roles, setRoles] = useState([]);
	const [permissions, setPermissions] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		slug: "",
		permissions: [],
	});
	const [loading, setLoading] = useState(false);
	const [openForm, setOpenForm] = useState(false);

	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/roles"
				);
				setRoles(response.data);
			} catch (error) {
				console.error(error);
				alert("Failed to fetch roles");
			}
		};
		fetchRoles();
	}, []);

	useEffect(() => {
		const fetchRoles = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/permissions"
				);
				setPermissions(response.data);
			} catch (error) {
				console.error(error);
				alert("Failed to fetch permissions");
			}
		};

		fetchRoles();
	}, []);

	const handleDelete = (id) => {
		setRoles((prevRole) => prevRole.filter((role) => role.id !== id));
	};

	const handleForm = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await axios.post(
				"http://localhost:8000/api/roles",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			alert(response.data.message);
			setRoles((prevRole) => [...prevRole, response.data.role]);
      setOpenForm(false);
			setFormData({ name: "", slug: "", permissions: [] });
		} catch (error) {
			console.error(error);
			alert(error.response?.data?.message || "Failed to create role");
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSelectChange = (e) => {
		const selectedOptions = Array.from(
			e.target.selectedOptions,
			(option) => option.value
		);

		setFormData((prev) => ({
			...prev,
			permissions: selectedOptions,
		}));
	};

	return (
		<div
			id="about"
			className="content-center h-screen bg-blue-300 d_container relative"
		>
			{/* Form Modal */}
			<div
				className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded border px-4 py-2 min-w-[400px] transition-all duration-300 ease-linear ${
					openForm ? "scale-x-100" : "scale-x-0"
				}`}
			>
				<div className="flex justify-between py-4 items-center">
					<h2 className="text-2xl text-green-600 font-bold">
						Create Role
					</h2>
          <button onClick={() => setOpenForm(false)} className="rounded-full px-4 py-2 border">X</button>
				</div>
				<form onSubmit={handleForm} className="space-y-4">
					<div>
						<label className="block" htmlFor="name">
							Name
						</label>
						<input
							className="border w-full"
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="">
						<label className="block" htmlFor="slug">
							Slug
						</label>
						<input
							className="border w-full"
							type="text"
							name="slug"
							value={formData.slug}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label className="block" htmlFor="permissions">
							Permissions
						</label>
						<select
							className="border w-full"
							name="permissions[]"
							id="permissions"
							value={formData.permissions}
							onChange={handleSelectChange}
							multiple
						>
							{permissions.map((permission) => (
								<option
									key={permission.id}
									value={permission.id}
								>
									{permission.name}
								</option>
							))}
						</select>
					</div>

					<div className="text-center">
						<button
							type="submit"
							className="text-white bg-green-500 px-4 py-2 rounded"
							disabled={loading}
						>
							{loading ? "Submitting..." : "Submit"}
						</button>
					</div>
				</form>
			</div>

			<div className="flex justify-end">
				<button
					className="text-white bg-green-600 px-2 py-1 rounded"
					onClick={() => setOpenForm(true)}
				>
					Create
				</button>
			</div>
			<div>
				<table className="w-full bg-white table-fixed border">
					<thead className="border py-4 bg-red-500">
						<tr className="py-4 *:py-2">
							<th>Name</th>
							<th>Permissions</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-200">
						{roles.map((role) => (
							<RoleItem
								key={role.id}
								role={role}
								onDelete={handleDelete}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
export default About;
