import React, { forwardRef, Ref, useState, ElementType } from "react";

// Define types for the Drawer component's props
type DrawerPropsWeControl =
	| "aria-describedby"
	| "aria-labelledby"
	| "aria-modal";

// DrawerProps: A generic type allowing any HTML element type (TTag)
export type DrawerProps<TTag extends ElementType = "div"> = {
	open: boolean;
	onClose: (value: boolean) => void;
	title?: string;
	role?: "dialog" | "alertdialog";
} & Omit<React.ComponentPropsWithoutRef<TTag>, DrawerPropsWeControl>;

// Drawer component with forwardRef
function DrawerFn<TTag extends ElementType = "h2">(
	{
		open = true,
		onClose,
		title = "Drawer Title",
		role = "dialog",
		children,
		...rest
	}: DrawerProps<TTag>,
	ref: Ref<HTMLDivElement>
) {
	const handleClose = () => {
		onClose(false);
	};

	return (
		<div className={`relative ${open ? "block" : "hidden"}`} {...rest}>
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
				ref={ref}
				role={role}
				className={`fixed right-0 top-0 h-full max-w-md w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
					open ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Drawer title */}
				<div className="flex justify-between items-center p-4 border-b">
					<DrawerTitle>{title}</DrawerTitle>
					<button
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

// Correctly forward the ref and ensure the ref type is passed
const Drawer = forwardRef(DrawerFn) as <
	TTag extends ElementType = typeof DEFAULT_DRAWER_TAG
>(
	props: DrawerProps<TTag> & { ref?: Ref<HTMLElement> }
) => JSX.Element;

// Define the DrawerTitle's props
export type DrawerTitleProps<
	TTag extends ElementType = typeof DEFAULT_DRAWER_TITLE_TAG
> = {
	children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<TTag>, "children">;

// DrawerTitle function component
function TitleFn<TTag extends ElementType = typeof DEFAULT_DRAWER_TITLE_TAG>(
	{ children, ...rest }: DrawerTitleProps<TTag>,
	ref: Ref<HTMLElement>
) {
	return (
		<h2 ref={ref} {...rest} className="text-lg font-semibold text-gray-900">
			{children}
		</h2>
	);
}

// Forward the ref for the DrawerTitle
const DrawerTitle = forwardRef(TitleFn) as <
	TTag extends ElementType = typeof DEFAULT_DRAWER_TITLE_TAG
>(
	props: DrawerTitleProps<TTag> & { ref?: Ref<HTMLElement> }
) => JSX.Element;

// Export Drawer and DrawerTitle
export { Drawer, DrawerTitle };
