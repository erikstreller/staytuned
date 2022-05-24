import { BasicTopAlbum } from '@/lib/types'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import AlbumCard from '../AlbumCard'
import AlbumCounter from '../AlbumCounter'
import Search from '../Search'
import Tag from '../Tag'

type TopAlbumsProps = {
  margin?: string
  topAlbums: BasicTopAlbum[]
}

export type CardColors = {
  background: string | undefined
  highlight: string | undefined
}

export default function TopAlbums({ margin, topAlbums }: TopAlbumsProps) {
  const [albums, setAlbums] = useState<BasicTopAlbum[]>(topAlbums)
  const [genres, setGenres] = useState<string[]>([])
  const [activeGenre, setActiveGenre] = useState<string>('')

  const [searchValue, setSearchValue] = useState<string>('')
  const [searchError, setSearchError] = useState<boolean>(false)

  const [cardColors, setCardColors] = useState<Map<string, CardColors>>(
    new Map<string, CardColors>()
  )

  useEffect(() => {
    let categories: string[] = []

    {
      topAlbums.map((album) => categories.push(album.category))
    }

    setGenres(Array.from(new Set(categories)))
  }, [topAlbums])

  useEffect(() => {
    let filtered = topAlbums.filter((album) => album.category === activeGenre)

    if (activeGenre === '') {
      filtered = topAlbums
    }

    if (searchValue.trim().length > 0) {
      filtered = filtered.filter(
        (album) =>
          album.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          album.artist.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (!filtered.length) {
      setSearchError(true)
    } else {
      setSearchError(false)
    }

    setAlbums(filtered)
  }, [topAlbums, searchValue, activeGenre])

  function updateCardColors(albumId: string, updatedCardColors: CardColors) {
    cardColors.set(albumId, updatedCardColors)
    setCardColors(cardColors)
  }

  return (
    <div id='topAlbumsSection' className={clsx('layout min-h-screen', margin)}>
      <h2 className='section-heading'>
        Top <AlbumCounter count={topAlbums.length} /> Albums
      </h2>
      <p className='section-description'>
        Check out our new top <AlbumCounter count={topAlbums.length} />
      </p>
      <Search margin='mb-4' setSearchValue={setSearchValue} />
      <div id='tags' className='mb-12 flex flex-wrap gap-2 text-sm'>
        {genres.map((genre, id) => (
          <Tag
            key={id}
            category={genre}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        ))}
      </div>
      {searchError && <p className='text-lg'>No Albums found</p>}
      <div id='topAlbums' className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            image={album.image[0].url}
            artist={album.artist}
            cardColors={cardColors.get(album.id)}
            updateCardColors={updateCardColors}
          />
        ))}
      </div>
    </div>
  )
}
