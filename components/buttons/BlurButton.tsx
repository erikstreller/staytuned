import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type BlurButtonProps = {
  gradient?: boolean
  color: string | undefined
  font?: string
}

export default function BlurButton({
  gradient,
  color,
  font,
  children
}: PropsWithChildren<BlurButtonProps>) {
  return (
    <div className='flex'>
      <div className='group relative hover:cursor-pointer'>
        <div
          className={clsx(
            'absolute -inset-1 rounded-lg opacity-75 blur',
            'transition duration-700 group-hover:opacity-100 group-hover:duration-200',
            gradient ? clsx('bg-gradient-to-r', color) : ''
          )}
          style={{ backgroundColor: gradient ? 'transparent' : color }}
        ></div>
        <div
          className={clsx(
            'scale-100 rounded-lg px-6 py-3 shadow-sm',
            'border border-gray-600 bg-white dark:bg-marine',
            'transition duration-100 hover:scale-[1.03] active:scale-[0.97]',
            font ? font : 'text-lg font-bold md:text-xl'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
