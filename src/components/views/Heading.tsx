'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export const Heading = (): JSX.Element => {
	return (
		<div className="max-w-3xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
				Your Ideas, Documents & Plans, Unified. Welcome to{' '}
				<span className="underline">Notion</span>
			</h1>
			<h3 className="text-base sm:text-xl md:text-2xl font-medium">
				Notion is connected workspace where <br />
				better, faster work happens.
			</h3>
			<Button>
				Enter Notion
				<ArrowRight className="h-4 w-4 ml-2" />
			</Button>
		</div>
	)
}

export default Heading
