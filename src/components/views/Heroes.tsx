'use client'

import Image from 'next/image'

export const Heroes = (): JSX.Element => {
	return (
		<div className="flex flex-col items-center justify-center max-w-5xl">
			<div className="flex item-center">
				<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
					<Image
						src="/reading.webp"
						layout="fill"
						className="object-contain dark:hidden"
						alt="reading"
					/>
					<Image
						src="/reading-dark.webp"
						layout="fill"
						className="object-contain hidden dark:block"
						alt="reading"
					/>
				</div>
				<div className="relative h-[400px] w-[400px] hidden md:block">
					<Image
						src="/working.webp"
						layout="fill"
						className="object-contain dark:hidden"
						alt="Working"
					/>
					<Image
						src="/working-dark.webp"
						layout="fill"
						className="object-contain hidden dark:block"
						alt="Working"
					/>
				</div>
			</div>
		</div>
	)
}

export default Heroes
