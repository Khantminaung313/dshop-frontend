
const MobileSubCategories = ({ selectedChildCategories }) => {

	return (
		<ul className="child-categories divide-y divide-slate-200 *:py-2 *:pl-6 border-y border-slate-200 leading-6">
			{selectedChildCategories.map((childCategory) => (
				<li key={childCategory.id}>{childCategory.name}</li>
			))}
		</ul>
	);
};

export default MobileSubCategories;