import axios from "axios";

const RoleItem = ({ role, onDelete, setMessage}) => {

    const handleDelete = async () => {
        if(window.confirm(`Are you sure, you want to delete the role "${role.name}" ?`)){
            try{
                const response = await axios.delete(`http://localhost:8000/api/roles/${role.id}`);
                setMessage(response.data.message)
                onDelete(role.id)
            } catch (error) {
                console.error(error);
                alert(error.response?.data?.message || "Failed to delete role.")
            }
        }
    }

	return (
		<tr className="*:py-2">
			<td>{role.name}</td>
			<td className="flex gap-1 justify-center">
				{role.
                permissions.map((permission) => (
					<span key={permission.id} className="rounded bg-green-400 text-white p-1 text-sm">{permission.name}</span>
				))}
			</td>
			<td className="space-x-3">
				<button className="px-2 py-1 rounded border border-orange-500 text-orange-500">
					Edit
				</button>
				<button className="px-2 py-1 rounded border border-red-500 text-red-500" onClick={handleDelete}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default RoleItem;
