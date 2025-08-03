import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import ConvexClientProvider from '@/components/providers/ConvexProvider'
import { Toaster } from 'sonner'
import ModalProvider from '@/components/providers/ModalProvider'
import { EdgeStoreProvider } from '../lib/edgestore'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
	title: 'Notion',
	description:
		'The ultimate workspace to organize ideas, manage tasks, and collaborate effortlessly.',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: 'logo.svg',
				href: 'logo.svg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: 'logo-dark.svg',
				href: 'logo-dark.svg',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${serif.variable} scrollbar-hide`}
			>
				<ConvexClientProvider>
					<EdgeStoreProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
							storageKey="notion-theme"
						>
							<Toaster position="bottom-center" />
							<ModalProvider />
							{children}
						</ThemeProvider>
					</EdgeStoreProvider>
				</ConvexClientProvider>
			</body>
		</html>
	)
}
