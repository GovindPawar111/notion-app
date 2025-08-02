'use client'

import SearchCommandModal from '@/components/modals/SearchCommandModal'
import Spinner from '@/components/views/generic/Spinner'
import Navigation from '@/components/views/main/Navigation'
import { useConvexAuth } from 'convex/react'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	const { isAuthenticated, isLoading } = useConvexAuth()

	if (isLoading) {
		return (
			<div className="h-[100vh] flex items-center justify-center">
				<Spinner size="lg" />
			</div>
		)
	}

	if (!isAuthenticated) {
		return redirect('/')
	}

	return (
		<div className="h-[100vh] flex-1 flex dark:bg-[#1f1f1f]">
			<Navigation />
			<SearchCommandModal />
			<main className="flex-1 h-full overflow-y-auto">{children}</main>
		</div>
	)
}

export default MainLayout
