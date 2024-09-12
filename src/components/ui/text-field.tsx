import {
	forwardRef,
	ForwardRefRenderFunction,
	InputHTMLAttributes,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export type TextFieldRef = HTMLInputElement

const TextFieldComponent: ForwardRefRenderFunction<
	TextFieldRef,
	TextFieldProps
> = ({ className, ...props }, ref) => {
	return (
		<input
			ref={ref}
			className={twMerge(
				'block w-full p-4 text-sm text-gray-800 border border-gray-300 outline-none rounded-lg focus:ring-gray-800 focus:border-gray-800',
				className
			)}
			{...props}
		/>
	)
}

export const TextField = forwardRef<TextFieldRef, TextFieldProps>(
	TextFieldComponent
)
