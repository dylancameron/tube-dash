import React, { ElementType, forwardRef, Ref, useState } from "react";

// Default tags for the various parts of the drawer
const DEFAULT_DRAWER_TAG = "div";
const DEFAULT_DRAWER_TITLE_TAG = "h2";

interface DrawerRenderPropArg {
	open: boolean;
}

type DrawerPropsWeControl =
	| "aria-describedby"
	| "aria-labelledby"
	| "aria-modal";

export type DrawerProps<TTag extends ElementType = typeof DEFAULT_DRAWER_TAG> =
	{
		open?: boolean;
		onClose: (value: boolean) => void;
		title?: string;
		role?: "dialog" | "alertdialog";
		initialFocus?: React.RefObject<HTMLElement | null>;
		autoFocus?: boolean;
		transition?: boolean;
	} & React.ComponentPropsWithoutRef<TTag>;

function DrawerFn<TTag extends ElementType = typeof DEFAULT_DRAWER_TAG>(
	props: DrawerProps<TTag>,
	ref: Ref<HTMLElement>
) {
	const {
		open = true,
		onClose,
		title = "Drawer Title",
		role = "dialog",
		autoFocus = true,
		transition = true,
		children,
		...rest
	} = props;

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

const Drawer = forwardRef(DrawerFn) as <
	TTag extends ElementType = typeof DEFAULT_DRAWER_TAG
>(
	props: DrawerProps<TTag> & { ref?: Ref<HTMLElement> }
) => JSX.Element;

// Types for the Title Component
export type DrawerTitleProps<
	TTag extends ElementType = typeof DEFAULT_DRAWER_TITLE_TAG
> = {
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<TTag>;
