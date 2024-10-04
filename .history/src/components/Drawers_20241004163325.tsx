import { useState } from "react";

interface DrawerProps {
	children: React.ReactNode;
	title?: string;
	isOpen?: boolean;
	onClose?: () => void;
}

export default function Drawer({
	children,
	title = "Drawer Title",
	isOpen = true,
	onClose,
}: DrawerProps) {
	const [open, setOpen] = useState(isOpen);

	const handleClose = () => {
		setOpen(false);
		if (onClose) {
			onClose();
		}
	};

	return (
		<div className={`relative ${open ? "block" : "hidden"}`}>
			{/* Backdrop */}
			<div
				className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${
					open ? "opacity-100" : "opacity-0"
				}`}
				onClick={handleClose}
			></div>

			{/* Drawer panel */}
			<div
				className={`fixed right-0 top-0 h-full max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center p-4 border-b">
					<h2 className="text-lg font-semibold text-gray-900">
						{title}
					</h2>
					<button
						className="text-gray-500 hover:text-gray-900 focus:outline-none"
						onClick={handleClose}
					>
						<span className="sr-only">Close panel</span>
						{/* Close (X) icon, you can also use any icon library */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div className="p-4 overflow-y-auto h-full">{children}</div>
			</div>
		</div>
	);
}
