import React from "react";

type Props = {};

export const Hero = (props: Props) => {
	return (
		<section className="">
			<div className="container mx-auto min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden py-16 md:py-20 xl:py-48">
				<div className="relative flex flex-col items-center p-4 sm:max-w-xl">
					<p className="mb-4 text-center text-lg text-gray-600 sm:text-xl md:mb-8">
						Front-end Architect
					</p>
					<h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
						I build digital products usable for everyone.
						Occasionally, I write development related insights.
					</h1>

					<div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
						<a
							href="#"
							className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
						>
							About
						</a>

						<a
							href="#"
							className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
						>
							Article
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
