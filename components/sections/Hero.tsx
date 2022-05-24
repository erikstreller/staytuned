import clsx from 'clsx'
import Image from 'next/image'
import AlbumCounter from '../AlbumCounter'
import BlurButton from '../buttons/BlurButton'
import PageLink from '../links/PageLink'

type HeroProps = {
  margin?: string
  topAlbumsLength: number
}

export default function Hero({ margin, topAlbumsLength }: HeroProps) {
  return (
    <div className={clsx('relative lg:h-[500px] xl:h-[600px]', margin)}>
      <div
        className={clsx(
          'layout relative mb-10 h-[250px] rounded-3xl shadow-xl',
          'sm:h-[300px] md:h-[400px] lg:h-full',
          'lg:absolute lg:right-0 lg:mb-0 lg:w-[48%] lg:rounded-l-3xl'
        )}
      >
        <Image
          priority
          alt='festival'
          src='/images/nainoa-shizuru-unsplash.jpg'
          layout='fill'
          objectFit='cover'
          className='rounded-3xl lg:rounded-l-3xl lg:rounded-r-none'
        />
      </div>
      <div className='layout relative h-full'>
        <div className='flex h-full w-full lg:absolute lg:left-0'>
          <div className='flex flex-col justify-center lg:w-1/2 lg:pr-4'>
            <h1 className='page-heading'>
              Feel the intensity as if you were at a festival
            </h1>
            <p className='page-description'>
              Put on your headphones and browse through the top{' '}
              <AlbumCounter count={topAlbumsLength} /> albums right now
            </p>
            <PageLink href='#topAlbumsSection'>
              <BlurButton gradient color='from-cyan-500 to-amber-500'>
                Play
              </BlurButton>
            </PageLink>
          </div>
        </div>
      </div>
    </div>
  )
}
