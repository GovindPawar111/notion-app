'use client'

import { ReactNode } from 'react'

export default function PublicLayout({ children }: { children: ReactNode }) {
	return <div className="h-full dark:bg-[#1f1f1f]">{children}</div>
}
