import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

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
		<html lang="en" className={`${inter.variable} ${serif.variable}`}>
			<body>{children}</body>
		</html>
	)
}
