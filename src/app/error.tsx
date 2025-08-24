'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Error() {
	return (
		<div className="h-[100vh] flex flex-col items-center justify-center space-y-4 dark:bg-[#1f1f1f]">
			<Image
				src="/thinking.webp"
				height={300}
				width={300}
				alt="Error"
				className="dark:hidden"
			/>
			<Image
				src="/thinking-dark.webp"
				height={300}
				width={300}
				alt="Error"
				className="hidden dark:block"
			/>

			<h2 className="text-xl font-medium">Something went wrong!</h2>
			<Button asChild>
				<Link href={'/documents'}>Go back</Link>
			</Button>
		</div>
	)
}
