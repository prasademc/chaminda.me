import React from "react";

type Props = {};

export const Header = (props: Props) => {
	return (
		<section className="sticky top-0 z-30 bg-gray-300">
			<header className="container mx-auto flex items-center justify-between py-8">
				<a
					href="/"
					className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-extrabold uppercase tracking-tighter text-transparent"
					aria-label="logo"
				>
					Chaminda.me
				</a>

				<button
					type="button"
					className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-semibold text-gray-100 ring-indigo-300 focus-visible:ring active:text-gray-300"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</header>
		</section>
	);
};
