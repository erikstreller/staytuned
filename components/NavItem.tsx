import clsx from 'clsx'
import Link from 'next/link'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

type NavItemProps = {
  href: string
  text: string | ReactNode
  className?: string
} & ComponentPropsWithoutRef<'a'>

export default function NavItem({
  href,
  text,
  className,
  ...rest
}: NavItemProps) {
  return (
    <Link href={href}>
      <a {...rest} className={clsx('transition-all', className)}>
        {text}
      </a>
    </Link>
  )
}
