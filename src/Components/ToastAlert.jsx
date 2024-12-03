import { useEffect, useState } from "react";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

const ToastAlert = ({message, setMessage}) => {
	const [openAlert, setOpenAlert] = useState(false);
    useEffect(() => {
		if (message) {
		  setOpenAlert(true);

		  const timer = setTimeout(() => {
			setOpenAlert(false);
			const hideMessageTimer = setTimeout(() => {
			  setMessage(null);
			}, 300);
			return () => clearTimeout(hideMessageTimer);
		  }, 3000);
		  return () => clearTimeout(timer);
		}
	  }, [message, setMessage]);

  return (
    <div
				role="alert"
				className={`rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 fixed bottom-8 right-0 w-auto transition-all duration-300 ease-linear ${
					openAlert ? "-translate-x-4" : "translate-x-full"
				}`}
			>
				<div className="flex items-start gap-4">
					<span className="text-green-600">
						<BiCheckCircle className="size-6" />
					</span>

					<div className="flex-1">
						<strong className="block font-medium text-gray-900 dark:text-white">
							Completed
						</strong>

						<p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
							{message}
						</p>
					</div>

					<button
						className="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
						onClick={() => setOpenAlert(false)}
					>
						<span className="sr-only">Dismiss popup</span>
						<BiXCircle className="size-6" />
					</button>
				</div>
			</div>
  )
}

export default ToastAlert