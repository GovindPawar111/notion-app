'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import useCoverImage from '@/hooks/useCoverImage'
import { useEdgeStore } from '@/lib/edgestore'
import { cn } from '@/lib/utils'
import { useMutation } from 'convex/react'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

interface CoverProps {
	url?: string
	preview?: boolean
}

const Cover = ({ url, preview }: CoverProps) => {
	const params = useParams()
	const { onReplace } = useCoverImage()
	const { edgestore } = useEdgeStore()
	const removeCoverImage = useMutation(api.documents.removeCoverImage)

	const onRemove = async () => {
		if (url) {
			await edgestore.publicFiles.delete({
				url: url,
			})
		}
		removeCoverImage({ id: params.documentId as Id<'documents'> })
	}

	return (
		<div
			className={cn(
				'relative w-full h-[35vh] group',
				!url && 'h-[12vh]',
				url && 'bg-muted',
			)}
		>
			{!!url && (
				<Image src={url} fill alt="Cover" className="object-cover" />
			)}
			{url && !preview && (
				<div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 items-center gap-x-2">
					<Button
						onClick={() => onReplace(url)}
						className="text-muted-foreground text-xs mr-2"
						variant={'outline'}
						size={'sm'}
					>
						<ImageIcon className="h-4 w-4" />
						Change cover
					</Button>
					<Button
						onClick={onRemove}
						className="text-muted-foreground text-xs mr-2"
						variant={'outline'}
						size={'sm'}
					>
						<X className="h-4 w-4" />
						Remove
					</Button>
				</div>
			)}
		</div>
	)
}

export default Cover

Cover.Skeleton = function CoverSkeleton() {
	return <Skeleton className="w-full h-[12vh]" />
}
