'use client'

import { ReactNode } from 'react'
import { ClerkProvider, useAuth } from '@clerk/clerk-react'
import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'

const convext = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
			afterSignOutUrl="/"
		>
			<ConvexProviderWithClerk useAuth={useAuth} client={convext}>
				{children}
			</ConvexProviderWithClerk>
		</ClerkProvider>
	)
}

export default ConvexClientProvider
