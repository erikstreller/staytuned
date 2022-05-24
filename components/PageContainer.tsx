import { brand } from '@/lib/brand'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { PropsWithChildren, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Footer from './Footer'
import NavItem from './NavItem'

const customMeta = {
  title: `${brand} – Like You Were At A Festival`,
  description:
    'Put on your headphones and browse through the top 100 albums right now',
  type: 'website'
}

type PageContainerProps = {
  page?: string
} & Partial<typeof customMeta>

export default function PageContainer(
  props: PropsWithChildren<PageContainerProps>
) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  const meta = { ...customMeta, ...props }

  meta['title'] = props.page ? `${props.page} – ${brand}` : meta.title

  useEffect(() => setMounted(true), [])

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen w-full'>
        <div className='layout'>
          <nav className='flex items-center justify-between py-8'>
            <div className='flex space-x-6'>
              <NavItem
                href='/'
                className='py-2 text-2xl font-bold'
                text={
                  <>
                    <span className='text-cyan-500'>S</span>tay
                    <span className='text-amber-500'>T</span>uned
                  </>
                }
              />
            </div>
            <button
              aria-label='toggle theme'
              className='flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-400 transition-all hover:ring-2 dark:bg-gray-800'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              {mounted &&
                (theme === 'light' ? (
                  <FiMoon size={20} />
                ) : (
                  <FiSun size={20} />
                ))}
            </button>
          </nav>
        </div>
        <main className='w-full'>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}
