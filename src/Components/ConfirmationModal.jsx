const ConfirmationModal = ({openConfirmation, selectedRole, confirmDelete, cancelDelete}) => {
  return (
    <div>
        {openConfirmation && selectedRole && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] rounded shadow bg-white border px-6 py-4 space-y-6">
					<h2 className="text-2xl font-bold text-red-500">
						Confirmation Alert
					</h2>
					<p>
						Are you sure, you want to delete this{" "}
						{`"${selectedRole.name}"`}
					</p>
					<div className="flex gap-4 items-center justify-end">
						<button
							className="text-white bg-red-500 py-2 px-4 rounded"
							onClick={confirmDelete}
						>
							Delete
						</button>
						<button
							className="text-white bg-slate-600 py-2 px-4 rounded"
							onClick={cancelDelete}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
    </div>
  )
}

export default ConfirmationModal