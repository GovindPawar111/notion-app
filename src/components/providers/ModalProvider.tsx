'use client'

import { useEffect, useState } from 'react'
import SettingModal from '../modals/SettingModal'
import SearchCommandModal from '../modals/SearchCommandModal'

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}
	return (
		<>
			<SettingModal />
			<SearchCommandModal />
		</>
	)
}

export default ModalProvider
