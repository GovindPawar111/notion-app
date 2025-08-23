'use client'
import { useCreateBlockNote } from '@blocknote/react'
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from '@blocknote/mantine'
// Default styles for the mantine editor
import '@blocknote/mantine/style.css'
// Include the included Inter font
import '@blocknote/core/fonts/inter.css'
import { useTheme } from 'next-themes'
import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { useEdgeStore } from '@/lib/edgestore'

interface EditorProps {
	onChange: (value: string) => void
	initialContent?: string
	editable?: boolean
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
	const { resolvedTheme } = useTheme()
	const { edgestore } = useEdgeStore()

	const handleUpload = async (file: File) => {
		const response = await edgestore.publicFiles.upload({
			file,
		})
		return response.url
	}

	const editor: BlockNoteEditor = useCreateBlockNote({
		initialContent: initialContent
			? (JSON.parse(initialContent) as PartialBlock[])
			: undefined,
		uploadFile: handleUpload,
	})

	return (
		<div>
			<BlockNoteView
				editor={editor}
				theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
				editable={!editable}
				onChange={(editor: BlockNoteEditor) =>
					onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
				}
			/>
		</div>
	)
}
export default Editor
