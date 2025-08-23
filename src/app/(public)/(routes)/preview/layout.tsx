'use client'

import { ReactNode } from 'react'

const PublicLayout = ({ children }: { children: ReactNode }): JSX.Element => {
	return <div className="h-full dark:bg-[#1f1f1f]">{children}</div>
}

export default PublicLayout
