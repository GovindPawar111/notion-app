'use client'

import useCoverImage from '@/hooks/useCoverImage'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { UploaderProvider, UploadFn } from '../ui/upload/uploader-provider'
import { SingleImageDropzone } from '../ui/upload/single-image'
import { useEdgeStore } from '@/lib/edgestore'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useParams } from 'next/navigation'
import { Id } from '@/convex/_generated/dataModel'

const CoverImageModal = () => {
	const [isMounted, setIsMounted] = useState(false)
	const params = useParams()
	const update = useMutation(api.documents.update)

	const coverimage = useCoverImage()
	const { edgestore } = useEdgeStore()

	const uploadFn: UploadFn = useCallback(
		async ({ file, onProgressChange, signal }) => {
			const res = await edgestore.publicFiles.upload({
				file,
				onProgressChange,
				signal,
				options: {
					replaceTargetUrl: coverimage.url,
				},
			})

			if (!params.documentId) {
				return res
			}

			await update({
				id: params.documentId as Id<'documents'>,
				coverImage: res.url,
			})

			coverimage.onClose()

			return res
		},
		[edgestore, params, coverimage.url],
	)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<Dialog open={coverimage.isOpen} onOpenChange={coverimage.onClose}>
			<DialogContent>
				<DialogTitle>
					<div className="text-center text-lg font-semibold">
						Cover image
					</div>
				</DialogTitle>
				<UploaderProvider uploadFn={uploadFn} autoUpload>
					<SingleImageDropzone
						dropzoneOptions={{
							maxSize: 1024 * 400, // 400 KB
						}}
						className="w-full h-full"
					/>
				</UploaderProvider>
			</DialogContent>
		</Dialog>
	)
}

export default CoverImageModal
