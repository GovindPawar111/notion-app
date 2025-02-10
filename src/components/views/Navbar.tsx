'use client'

import { cn } from '@/lib/utils'
import useScrollTop from '@/hooks/useScrollTop'
import Logo from './Logo'
import { ModeToggle } from './ModeToggle'

const Navbar = (): JSX.Element => {
	const isScrolled = useScrollTop()
	return (
		<div
			className={cn(
				'z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1f1f1f]',
				isScrolled && 'border-b shadow-sm',
			)}
		>
			<Logo />
			<div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
