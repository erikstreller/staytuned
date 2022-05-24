import PageContainer from '@/components/PageContainer'
import Hero from '@/components/sections/Hero'
import TopAlbums from '@/components/sections/TopAlbums'
import fetcher from '@/lib/fetcher'
import { APIres, BasicTopAlbum } from '@/lib/types'
import type { NextPage } from 'next'
import useSWR from 'swr'

const Home: NextPage = () => {
  const { data } = useSWR<APIres>(
    'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    fetcher
  )

  let topAlbums: BasicTopAlbum[] = []

  data?.feed.entry.map((album) =>
    topAlbums.push({
      name: album['im:name'].label,
      image: album['im:image'].map((oneSize) => ({
        url: oneSize.label,
        height: oneSize.attributes.height
      })),
      artist: album['im:artist'].label,
      category: album.category.attributes.term,
      id: album.id.attributes['im:id']
    })
  )

  return (
    <PageContainer>
      <Hero margin='mb-20' topAlbumsLength={topAlbums.length} />
      <TopAlbums topAlbums={topAlbums} margin='mb-12 pt-8 md:pt-16' />
    </PageContainer>
  )
}

export default Home
