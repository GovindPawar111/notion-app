'use client'

import Image from 'next/image'

export const Heroes = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-5xl">
			<div className="flex item-center">
				<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
					<Image
						src="/reading.webp"
						layout="fill"
						className="object-contain"
						alt="reading"
					/>
				</div>
				<div className="relative h-[400px] w-[400px] hidden md:block">
					<Image
						src="/working.webp"
						layout="fill"
						className="object-contain"
						alt="Working"
					/>
				</div>
			</div>
		</div>
	)
}

export default Heroes
