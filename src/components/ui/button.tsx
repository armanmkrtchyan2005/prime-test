import {
	ButtonHTMLAttributes,
	forwardRef,
	ForwardRefRenderFunction,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export type ButtonRef = HTMLButtonElement

const ButtonComponent: ForwardRefRenderFunction<ButtonRef, ButtonProps> = (
	{ className, ...props },
	ref
) => {
	return (
		<button
			ref={ref}
			className={twMerge(
				'bg-gray-800 text-white py-2 px-5 rounded text-sm',
				className
			)}
			{...props}
		/>
	)
}

export const Button = forwardRef<ButtonRef, ButtonProps>(ButtonComponent)
