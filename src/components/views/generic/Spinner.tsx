import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const spinnerVariants = cva('text-muted-foreground animate-spin', {
	variants: {
		size: {
			default: 'h-4 w-4',
			sm: 'h-2 w-2',
			lg: 'h-6 w-6',
			icon: 'h-10 w-10',
		},
	},
	defaultVariants: {
		size: 'default',
	},
})

type SpinnerProps = VariantProps<typeof spinnerVariants> & {
	size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Spinner = ({ size = 'default' }: SpinnerProps) => {
	return <Loader className={cn(spinnerVariants({ size }))}></Loader>
}

export default Spinner
