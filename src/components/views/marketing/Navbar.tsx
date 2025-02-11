'use client'

import { cn } from '@/lib/utils'
import useScrollTop from '@/hooks/useScrollTop'
import Logo from '../generic/Logo'
import { ModeToggle } from '../generic/ModeToggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '../../ui/button'
import Spinner from '../generic/Spinner'
import Link from 'next/link'

const Navbar = (): JSX.Element => {
	const { isAuthenticated, isLoading } = useConvexAuth()
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
				{isLoading && <Spinner />}
				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode="modal">
							<Button variant="ghost" size="sm">
								Log in
							</Button>
						</SignInButton>
						<SignInButton mode="modal">
							<Button size="sm">Get Notion Free</Button>
						</SignInButton>
					</>
				)}
				{isAuthenticated && !isLoading && (
					<>
						<Button variant="ghost" size="sm" asChild>
							<Link href="/documents">Enter Notion</Link>
						</Button>
						<UserButton afterSignOutUrl="/" />
					</>
				)}
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
