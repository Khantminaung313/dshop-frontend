import axios from "axios";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../Components/ConfirmationModal";
import ToastAlert from "../../Components/ToastAlert";
import { deleteData, fetchData } from "../../Services/crudService";

const Roles = () => {
	const [roles, setRoles] = useState(null);
	const [permissions, setPermissions] = useState([]);
	const [formData, setFormData] = useState({
		name: "",
		permissions: [],
	});
	const [errors, setErrors] = useState(null);
	const [loading, setLoading] = useState(false);
	const [openForm, setOpenForm] = useState(false);
	const [message, setMessage] = useState(null);
	const [selectedRole, setSelectedRole] = useState("Admin");
	const [openConfirmation, setOpenConfirmation] = useState(false);

	useEffect(() => {
		fetchData("roles").then(setRoles).catch(console.error);
		fetchData("permissions").then(setPermissions).catch(console.error);
	}, []);

	const handleDelete = async (roleId) => {
		try {
			const response = await deleteData("roles", roleId);
			setRoles(roles.filter((role) => role.id !== roleId));
			setOpenConfirmation(false);
            setSelectedRole(null);
			setMessage(response.data.message);
		} catch (error) {
			setOpenConfirmation(false);
			setMessage(error.message);
		}
	};

    const cancelDelete = () => {
        setOpenConfirmation(false);
        setSelectedRole(null);
    }

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
			setMessage(response.data.message);
			setRoles((prevRole) => [...prevRole, response.data.role]);
			setOpenForm(false);
			setErrors(null);
			setFormData({ name: "", slug: "", permissions: [] });
		} catch (error) {
			setErrors((prev) => ({
				...prev,
				name:
					error.response?.data?.errors.name ||
					"Failed to create role",
			}));
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
			{/* Toast Alert */}
			<ToastAlert message={message} setMessage={setMessage} />

			{/* Confirmation Alert */}
			<ConfirmationModal 
            openConfirmation={openConfirmation} 
            selectedRole={selectedRole} 
            confirmDelete={() => handleDelete(selectedRole.id)}
            cancelDelete={() => cancelDelete}
            />

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
					<button
						onClick={() => setOpenForm(false)}
						className="rounded-full px-4 py-2 border"
					>
						X
					</button>
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
						<span className="text-red-600 text-sm">
							{errors && errors.name && errors.name}
						</span>
					</div>

					<div>
						<label className="block" htmlFor="permissions">
							Permissions{" "}
							<span className="text-sm text-slate-600">
								(Optional)
							</span>
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
						{roles ? (
							roles.map((role) => (
								<tr key={role.id} className="*:py-2">
									<td>{role.name}</td>
									<td className="flex gap-1 justify-center">
										{role.permissions.map((permission) => (
											<span
												key={permission.id}
												className="rounded bg-green-400 text-white p-1 text-sm"
											>
												{permission.name}
											</span>
										))}
									</td>
									<td className="space-x-3">
										<button className="px-2 py-1 rounded border border-orange-500 text-orange-500">
											Edit
										</button>
										<button
											className="px-2 py-1 rounded border border-red-500 text-red-500"
											onClick={() =>{setOpenConfirmation(true); setSelectedRole(role)}}
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td
									className={`bg-slate-200 text-center py-8 place-content-center text-4xl w-full h-full`}
									colSpan={3}
								>
									Please Wait
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Roles;
