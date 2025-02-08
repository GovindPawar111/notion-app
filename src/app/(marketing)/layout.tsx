import Navbar from '@/components/views/Navbar'

const MarketingLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<div className="h-full">
			<Navbar />
			<main className="h-full pt-40">{children}</main>
		</div>
	)
}

export default MarketingLayout
