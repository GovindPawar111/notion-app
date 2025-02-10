import Navbar from '@/components/views/Navbar'

const MarketingLayout = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<div className="h-full dark:bg-[#1f1f1f]">
			<Navbar />
			<main className="h-full pt-40">{children}</main>
		</div>
	)
}

export default MarketingLayout
