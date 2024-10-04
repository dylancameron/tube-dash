import React, { forwardRef } from "react";

// Define types for the Drawer component's props
interface DrawerProps {
	open: boolean;
	onClose: (value: boolean) => void;
	title?: string;
	role?: "dialog" | "alertdialog";
	children: React.ReactNode;
}

// Drawer component with forwardRef and proper typing
const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
	(
		{
			open = true,
			onClose,
			title = "Drawer Title",
			role = "dialog",
			children,
		},
		ref
	) => {
		const handleClose = () => {
			onClose(false);
		};

		return (
			<div className={`relative ${open ? "block" : "hidden"}`}>
				{/* Backdrop */}
				<div
					className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity ${
						open ? "opacity-100" : "opacity-0"
					}`}
					onClick={handleClose}
					aria-hidden="true"
				></div>

				{/* Drawer panel */}
				<div
					ref={ref} // Properly typed as HTMLDivElement
					role={role}
					className={`fixed right-0 top-0 h-full max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
						open ? "translate-x-0" : "translate-x-full"
					}`}
				>
					{/* Drawer title */}
					<div className="flex justify-between items-center p-4 border-b">
						<DrawerTitle>{title}</DrawerTitle>
						<button
							type="button"
							className="text-gray-500 hover:text-gray-900 focus:outline-none"
							onClick={handleClose}
						>
							<span className="sr-only">Close panel</span>
							{/* Close (X) icon */}
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
);

// Define the props for DrawerTitle
interface DrawerTitleProps {
	children: React.ReactNode;
}

// DrawerTitle component with forwardRef and correct typing
const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
	({ children }, ref) => {
		return (
			<h2 ref={ref} className="text-lg font-semibold text-gray-900">
				{children}
			</h2>
		);
	}
);

export { DrawerTitle, Drawer };
