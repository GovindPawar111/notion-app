'use client'

import Image from 'next/image'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

export const DocumentsPage = (): JSX.Element => {
	const { user } = useUser()
	return (
		<div className="h-full flex flex-col items-center justify-center space-y-4">
			<Image
				src="/thinking.webp"
				alt="thinking"
				width="300"
				height="300"
				className="dark:hidden"
			/>
			<Image
				src="/thinking-dark.webp"
				alt="thinking"
				width="300"
				height="300"
				className="hidden dark:block"
			/>
			<h2 className="text-lg font-medium">
				Welcome to {user?.firstName}&apos;s Notion
			</h2>
			<Button>
				<PlusCircle className="h-4 w-4 mr-2" />
				Create a note
			</Button>
		</div>
	)
}

export default DocumentsPage
