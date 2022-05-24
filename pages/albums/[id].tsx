import BlurButton from '@/components/buttons/BlurButton'
import PageContainer from '@/components/PageContainer'
import fetcher from '@/lib/fetcher'
import { APIres, ExtendedTopAlbum, Image as ImageType } from '@/lib/types'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { usePalette } from 'react-palette'
import useSWR from 'swr'

export default function AlbumPage() {
  const router = useRouter()
  const { id } = router.query

  const { data } = useSWR<APIres>(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    fetcher
  )

  let topAlbums: ExtendedTopAlbum[] = []

  data?.feed.entry.map((album) =>
    topAlbums.push({
      name: album['im:name'].label,
      image: album['im:image'].map((oneSize) => ({
        url: oneSize.label,
        height: oneSize.attributes.height
      })),
      artist: album['im:artist'].label,
      category: album.category.attributes.term,
      id: album.id.attributes['im:id'],
      releaseDate: album['im:releaseDate'].label,
      price: album['im:price'].label
    })
  )

  const thisAlbum = topAlbums.filter((album) => album.id === id)
  const { data: imageColor } = usePalette(thisAlbum[0]?.image[0].url)

  function getAlbumImage(images: ImageType[]): string {
    return images.slice(-1)[0].url
  }

  return (
    <PageContainer>
      <div className='layout mt-4 md:mt-8'>
        {thisAlbum.map((album, id) => (
          <div key={id} className='flex flex-col items-center text-center'>
            <span className='relative mb-8 flex h-52 w-52 flex-shrink-0 rounded-md shadow-md'>
              <Image
                priority
                alt={album.name}
                src={getAlbumImage(album.image)}
                layout='fill'
                objectFit='cover'
                className='rounded-md'
              />
            </span>
            <p className='text-2xl font-semibold md:text-3xl'>{album.name}</p>
            <p
              className='text-2xl md:text-3xl'
              style={{ color: imageColor.vibrant }}
            >
              {album.artist}
            </p>
            <p className='text-description'>
              {album.category} • {format(parseISO(album.releaseDate), 'yyyy')}
            </p>
            <div id='price' className='mt-10'>
              <BlurButton
                color={imageColor.vibrant}
                font='text-base font-normal md:text-lg'
              >
                Buy for {album.price}
              </BlurButton>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
