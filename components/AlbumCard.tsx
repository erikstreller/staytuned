import { hexToRGB } from '@/lib/colors'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePalette } from 'react-palette'
import PageLink from './links/PageLink'
import { CardColors } from './sections/TopAlbums'

type AlbumCardProps = {
  id: string
  name: string
  image: string
  artist: string
  cardColors: CardColors | undefined
  updateCardColors: (albumId: string, cardColors: CardColors) => void
}

export default function AlbumCard({
  id,
  name,
  image,
  artist,
  cardColors,
  updateCardColors
}: AlbumCardProps) {
  const { data: imageColor, loading } = usePalette(image)
  const { isDark } = useTheme()
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    cardColors?.background
  )
  const [highlightColor, setHighlightColor] = useState<string | undefined>(
    cardColors?.highlight
  )
  const backgroundOpacity = isDark ? 0.15 : 0.1

  useEffect(() => {
    if (!cardColors !== undefined && !loading) {
      const newBackground = isDark ? imageColor.darkMuted : imageColor.vibrant
      const newHighlight = imageColor.vibrant
      setBackgroundColor(newBackground)
      setHighlightColor(newHighlight)

      updateCardColors(id, {
        background: newBackground,
        highlight: newHighlight
      })
    }
  }, [
    cardColors,
    isDark,
    id,
    loading,
    updateCardColors,
    imageColor.darkMuted,
    imageColor.vibrant
  ])

  return (
    <PageLink href={`/albums/${id}`}>
      <div
        className={clsx(
          'flex w-full items-center gap-[13px] rounded-lg border bg-white p-[13px]',
          'group transition duration-100 hover:scale-[1.01] hover:cursor-pointer active:scale-[0.99]'
        )}
        style={{
          background: hexToRGB(backgroundColor, backgroundOpacity),
          borderColor: hexToRGB(highlightColor, 0.5)
        }}
      >
        <span className='relative flex h-16 w-16 flex-shrink-0 rounded-md shadow-md'>
          <Image
            alt={name}
            src={image}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </span>
        <div
          className='flex flex-col gap-1 overflow-hidden'
          style={{ color: highlightColor }}
        >
          <p className='truncate text-lg font-semibold group-hover:underline group-hover:underline-offset-2'>
            {name}
          </p>
          <p className='truncate text-sm'>{artist}</p>
        </div>
      </div>
    </PageLink>
  )
}
