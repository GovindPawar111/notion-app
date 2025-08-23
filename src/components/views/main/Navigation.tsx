'use client'

import { cn } from '@/lib/utils'
import {
	ChevronsLeft,
	MenuIcon,
	Plus,
	PlusCircle,
	Search,
	Settings,
	Trash,
} from 'lucide-react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ElementRef, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import UserItem from './UserItem'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import Item from './Item'
import { toast } from 'sonner'
import DocumentList from './DocumentList'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { PopoverContent } from '@radix-ui/react-popover'
import TrashBox from './TrashBox'
import useSearch from '@/hooks/useSearch'
import useSettings from '@/hooks/useSettings'
import Navbar from './Navbar'

export const Navigation = (): JSX.Element => {
	const router = useRouter()
	const search = useSearch()
	const settings = useSettings()
	const pathName = usePathname()
	const params = useParams()
	const isMobile = useMediaQuery('(max-width: 768px)')
	const create = useMutation(api.documents.create)

	const isResizingRef = useRef(false)
	const sidebarRef = useRef<ElementRef<'aside'>>(null)
	const navbarRef = useRef<ElementRef<'div'>>(null)
	const [isResetting, setIsResetting] = useState(false)
	const [isCollapsed, setIsCollapsed] = useState(false)

	const handleMouseMove = (event: MouseEvent) => {
		if (!isResizingRef.current) return

		let newWidth = event.clientX
		if (newWidth < 240) newWidth = 240
		if (newWidth > 480) newWidth = 480

		if (sidebarRef.current && navbarRef.current) {
			sidebarRef.current.style.width = `${newWidth}px`
			navbarRef.current.style.setProperty('left', `${newWidth}px`)
			navbarRef.current.style.setProperty(
				'width',
				`calc(100% - ${newWidth}px)`,
			)
		}
	}

	const handleMouseUp = () => {
		isResizingRef.current = false
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', handleMouseUp)
	}

	const handleMouseDown = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		event.preventDefault()
		event.stopPropagation()

		isResizingRef.current = true
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
	}

	const resetWidth = (): void => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(false)
			setIsResetting(true)

			sidebarRef.current.style.width = isMobile ? '100%' : '240px'
			navbarRef.current.style.setProperty(
				'left',
				isMobile ? '100%' : '240px',
			)
			navbarRef.current.style.setProperty(
				'width',
				isMobile ? '0' : 'calc(100% - 240px)',
			)

			setTimeout(() => setIsResetting(false), 300)
		}
	}

	const collapse = (): void => {
		if (sidebarRef.current && navbarRef.current) {
			setIsCollapsed(true)
			setIsResetting(true)

			sidebarRef.current.style.width = '0'
			navbarRef.current.style.setProperty('left', '0')
			navbarRef.current.style.setProperty('width', '100%')

			setTimeout(() => setIsResetting(false), 300)
		}
	}
	const handleCreate = (): void => {
		const createPromise = create({ title: 'Untitled' }).then((documentId) =>
			router.push(`/documents/${documentId}`),
		)

		toast.promise(createPromise, {
			loading: 'Creating a new note...',
			success: 'New note created!',
			error: 'Failed to create a new note.',
		})
	}

	useEffect(() => {
		if (isMobile) {
			collapse()
		} else {
			resetWidth()
		}
	}, [isMobile])

	useEffect(() => {
		if (isMobile) {
			collapse()
		}
	}, [pathName, isMobile])

	return (
		<>
			<aside
				ref={sidebarRef}
				className={cn(
					'group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]',
					isResetting && 'transition-all eash-in-out duration-300',
					isMobile && 'w-0',
				)}
			>
				{/* Close button to close the sidebar. */}
				<div
					role="button"
					onClick={collapse}
					className={cn(
						'h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition cursor-pointer',
						isMobile && 'opacity-100',
					)}
				>
					<ChevronsLeft className="h-6 w-6 " />
				</div>
				<div>
					{/* User Tab button */}
					<UserItem />
					{/* Search tab button */}
					<Item
						onClick={() => {
							search.onOpen()
						}}
						label={'Search'}
						icon={Search}
						isSearch
					/>
					{/* Setting tab button */}
					<Item
						onClick={() => {
							settings.onOpen()
						}}
						label={'Settings'}
						icon={Settings}
					/>
					{/* Add New Page tab button */}
					<Item
						onClick={handleCreate}
						label={'New Page'}
						icon={PlusCircle}
					/>
				</div>
				<div className="mt-4">
					{/* Render list of Notes */}
					<DocumentList />
					{/* Render Add a page button */}
					<Item
						onClick={handleCreate}
						label={'Add a page'}
						icon={Plus}
					/>
					{/* Trash box tab button along with Pop over component */}
					<Popover>
						<PopoverTrigger className="w-full mt-4">
							<Item label="Trash" icon={Trash} />
						</PopoverTrigger>
						<PopoverContent
							className="ml-1 p-0 w-72 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]"
							side={isMobile ? 'bottom' : 'right'}
						>
							<TrashBox />
						</PopoverContent>
					</Popover>
				</div>
				{/* Bar component to change the width of sidebar */}
				<div
					onMouseDown={handleMouseDown}
					onClick={resetWidth}
					className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
				/>
			</aside>
			<div
				ref={navbarRef}
				className={cn(
					'absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]',
					isResetting && 'transition-all ease-in-out duration-300',
					isMobile && 'left-0 w-full',
				)}
			>
				{/* Meun button to open the sidebar. */}
				{!!params.documentId ? (
					<Navbar
						isCollapsed={isCollapsed}
						onResetWidth={resetWidth}
					/>
				) : (
					<nav className="bg-transparent px-3 py-2 w-full">
						{isCollapsed && (
							<MenuIcon
								role="button"
								onClick={resetWidth}
								className="h-6 w-6 text-muted-foreground"
							/>
						)}
					</nav>
				)}
			</div>
		</>
	)
}

export default Navigation
